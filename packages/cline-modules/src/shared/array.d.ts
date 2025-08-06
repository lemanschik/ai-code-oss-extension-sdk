/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @param array The source array to search in
 * @param predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 */
export declare function findLastIndex<T>(array: Array<T>, predicate: (value: T, index: number, obj: T[]) => boolean): number;
export declare function findLast<T>(array: Array<T>, predicate: (value: T, index: number, obj: T[]) => boolean): T | undefined;
/**
 * Converts a partial or complete stringified array into an actual array.
 * Handles both complete JSON strings and incomplete array strings.
 * Splits on the specific tokens: ["  ", "  "]
 * @param arrayString A string representation of an array, which may be incomplete
 * @returns Array of strings parsed from the input
 */
export declare function parsePartialArrayString(arrayString: string): string[];
