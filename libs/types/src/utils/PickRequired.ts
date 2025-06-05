import { ResolveObject } from './ResolveObject';
/**
 * @description picks a subset of properties from a type and makes them required, remaining other properties are kept as they are
 * @example
 * import { PickRequired } from '@/types';
 * type Input = { title?: string; description?: string; };
 * type Output = PickRequired<Input, 'title'>;
 * type Output = { title: string; description?: string | undefined; }
 */
export type PickRequired<T, K extends keyof T> = ResolveObject<Omit<T, K> & Required<Pick<T, K>>>;
