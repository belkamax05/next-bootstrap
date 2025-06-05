import { ResolveObject } from './ResolveObject';
/**
 * @description picks a subset of properties from a type and makes them optional, remaining other properties are kept as they are
 * @example
 * import { PickPartial } from '@/types';
 * type Input = { title: string; description: string; };
 * type Output = PickPartial<Input, 'description'>;
 * type Output = { title: string; description?: string | undefined; }
 */
export type PickPartial<T, K extends keyof T> = ResolveObject<Omit<T, K> & Partial<Pick<T, K>>>;
