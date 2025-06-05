/**
 * Keep the autocomplete for the given keys, but allow any other string
 */
export type LooseAutocomplete<T extends string> = T | Omit<string, T>;
