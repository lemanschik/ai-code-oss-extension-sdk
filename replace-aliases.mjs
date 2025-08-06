// replace-aliases.mjs
import fs from 'fs/promises';
import path from 'path';

// --- CONFIGURATION ---
const SRC_DIRECTORY = 'src';
const FILE_EXTENSIONS = ['.tsx','.ts', '.js'];
const ALIAS_CONFIG = {
	'@/*': 'src/*',
	'@api/*': 'src/api/*',
	'@core/*': 'src/core/*',
	'@generated/*': 'src/generated/*',
	'@hosts/*': 'src/hosts/*',
	'@integrations/*': 'src/integrations/*',
	'@packages/*': 'src/packages/*',
	'@services/*': 'src/services/*',
	'@shared/*': 'src/shared/*',
	'@utils/*': 'src/utils/*',
};

// --- SCRIPT LOGIC ---

// 1. Prepare aliases: remove "/*" and sort by length (longest first)
const aliasMap = new Map(
	Object.entries(ALIAS_CONFIG)
		.map(([key, value]) => [key.replace('/*', ''), value.replace('/*', '')])
		.sort((a, b) => b[0].length - a[0].length),
);
const aliasKeys = [...aliasMap.keys()];

// 2. Create a single, simple regex to find any import/require statement using an alias.
// It looks for a quote, one of the alias keys, and then the rest of the path until the closing quote.
const importRegex = new RegExp(
	`(['"])((${aliasKeys.join('|')})[^'"]*)['"]`,
	'g',
);

const stats = {
	filesScanned: 0,
	filesModified: 0,
};

/**
 * Calculates a clean relative path from one file to another.
 * @param {string} fromFile - The absolute path of the file with the import.
 * @param {string} toFile - The absolute path of the file being imported.
 * @returns {string} - The new relative path (e.g., '../../utils/helpers').
 */
function getRelativeImportPath(fromFile, toFile) {
	const fromDir = path.dirname(fromFile);
	// path.relative gives us the path from directory A to file B.
	let relativePath = path.relative(fromDir, toFile);

	// Add './' for local imports for clarity and module resolution standards.
	if (!relativePath.startsWith('.')) {
		relativePath = `./${relativePath}`;
	}

	// Use POSIX-style forward slashes for compatibility in imports.
	return relativePath.replace(/\\/g, '/').replace(/\.(ts|js)$/, ''); // Remove extension
}

async function processFile(filePath) {
	stats.filesScanned++;
	const originalContent = await fs.readFile(filePath, 'utf-8');
	let fileModified = false;

	const newContent = originalContent.replace(
		importRegex,
		(match, quote, aliasedPath) => {
			// `match` is the full string: `"@/core/utils"`
			// `quote` is the quote character: `"`
			// `aliasedPath` is the content inside the quotes: `@/core/utils`

			// Find which alias from our list is the prefix for this path.
			// Because we sorted keys by length, it will find '@core' before '@'.
			const matchingAlias = aliasKeys.find(key => aliasedPath.startsWith(key));
			if (!matchingAlias) return match; // Should not happen with our regex

			const aliasTarget = aliasMap.get(matchingAlias);
			
			// Reconstruct the path by replacing the alias with its target.
			// e.g., `@/services/user` -> `src/services/user`
			const resolvedPath = path.join(aliasTarget, aliasedPath.substring(matchingAlias.length));
			const absoluteTargetPath = path.resolve(process.cwd(), resolvedPath);
			
			// Calculate the new relative path and wrap it in the original quotes.
			const newRelativePath = getRelativeImportPath(filePath, absoluteTargetPath);
			fileModified = true;
			return `${quote}${newRelativePath}${quote}`;
		},
	);

	if (fileModified) {
		stats.filesModified++;
		console.log(`- MODIFIED: ${path.relative(process.cwd(), filePath)}`);
		await fs.writeFile(filePath, newContent, 'utf-8');
	}
}

async function walkDirectory(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name !== 'node_modules' && !entry.name.startsWith('.')) {
				await walkDirectory(fullPath);
			}
		} else if (FILE_EXTENSIONS.some(ext => entry.name.endsWith(ext))) {
			await processFile(fullPath);
		}
	}
}

async function main() {
	console.log('--- Starting Path Alias Replacement ---');
	const rootDir = path.resolve(process.cwd(), SRC_DIRECTORY);
	if (!(await fs.stat(rootDir).catch(() => false))) {
		console.error(`Error: Source directory "${SRC_DIRECTORY}" not found.`);
		return;
	}

	await walkDirectory(rootDir);

	console.log('\n--- Replacement Complete ---');
	console.log(`Files Scanned:  ${stats.filesScanned}`);
	console.log(`Files Modified: ${stats.filesModified}`);
	console.log('----------------------------');
}

main().catch(console.error);

async function main() {
	console.log('--- Starting Path Alias Replacement ---');
	const rootDir = path.resolve(process.cwd(), SRC_DIRECTORY);
	if (!(await fs.stat(rootDir).catch(() => false))) {
		console.error(`Error: Source directory "${SRC_DIRECTORY}" not found.`);
		return;
	}

	await walkDirectory(rootDir);

	console.log('\n--- Replacement Complete ---');
	console.log(`Files Scanned:  ${stats.filesScanned}`);
	console.log(`Files Modified: ${stats.filesModified}`);
	console.log('----------------------------');
}