@refactoring-helpers/rollup

/plugins/*
/configs/*

combines typescript + commonjs/esm refactoring

## Default Algos
- refactor to named imports so away from namespace imports
- check each files exports via import() 
- try to isolate type definitions into own files in the ts src 
  - eg mark them with type in the import statement.
- offer merge able codeMod refactorings for the upstream if they want to coop.