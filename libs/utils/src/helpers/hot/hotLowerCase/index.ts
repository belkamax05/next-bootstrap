import { HotLowerCase } from '@/types';

/**
 * (Typesafe) convert string value to lowercase
 * @param value string value
 * @returns {string} lowercase string
 * @example
 * const sample = hotLowerCase('ABC');
 * ?^ 'abc'
 */
const hotLowerCase = <TValue extends string, TResult extends HotLowerCase<TValue>>(
  value: TValue,
): TResult => value?.toLowerCase() as TResult;

export default hotLowerCase;
