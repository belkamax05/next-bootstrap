/**
 * converts object dictionary to jest.SpyInstance dictionary
 */
export type SpyInstanceDictionary<TObj extends Record<string, (...args: unknown[]) => unknown>> = {
  [Key in keyof TObj]: jest.SpyInstance<ReturnType<TObj[Key]>, Parameters<TObj[Key]>>;
};
