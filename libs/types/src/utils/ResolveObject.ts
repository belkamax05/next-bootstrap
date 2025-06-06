/**
 * @description resolve generics like "Partial" or "Required" to the actual type
 * @example
 * import { ResolveObject } from '@/types';
 * type Input = Required<{ title: string }> & Partial<{ description: string }>;
 * type Output = ResolveObject<Input>;
 * type Output = { title: string; description?: string | undefined; }
 */
export type ResolveObject<T> = {
  [Key in keyof T]: T[Key];
};
