import { AnyObject, HocObjectKeys } from '@/types';

/**
 * (Typesafe) get object keys
 * @param value object, when provided with 'as const' will return exact keys
 * @returns Object keys
 * @example
 * const sample = hotObjectKeys({ a: 1, b: 2, c: 3 });
 * ?^ ("a" | "b" | "c")[]
 * @example
 * const variable = sample[0];
 * ?^ "a" | "b" | "c"
 */

const hotObjectKeys = <TValue extends AnyObject, TResult extends HocObjectKeys<TValue>>(
  value: TValue,
) => Object.keys(value) as TResult;

export default hotObjectKeys;
