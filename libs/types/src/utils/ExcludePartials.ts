import { ResolveObject } from './ResolveObject';
/**
 * @description picks everything except a subset of properties from a type and makes them optional
 * @example
 * import { ExcludePartial } from '@/types';
 * type Input = { title: string; description: string; };
 * type Output = ExcludePartial<Input, 'title'>;
 * type Output = { title: string; description?: string | undefined; }
 */
export type ExcludePartial<T, K extends keyof T> = ResolveObject<Partial<Omit<T, K>> & Pick<T, K>>;
