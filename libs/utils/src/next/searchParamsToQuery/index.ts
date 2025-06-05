import { AnyObject, QueryParams } from '@/types';
import { ReadonlyURLSearchParams } from 'next/navigation';

/**
 * @description convert URLSearchParams to object
 * @param searchParams URLSearchParams
 * @returns object with key-value pairs
 * @example
 * const searchParams = new URLSearchParams('foo=bar&baz=qux');
 * const result = searchParamsToQuery(searchParams);
 * console.log(result); // { foo: 'bar', baz: 'qux' }
 */
const searchParamsToQuery = <TResult extends QueryParams>(
  searchParams: ReadonlyURLSearchParams,
): TResult => {
  const searchQuery: TResult = {} as TResult;
  searchParams?.forEach((value, key) => {
    if (searchQuery[key]) {
      if (Array.isArray(searchQuery[key])) searchQuery[key].push(value);
      else (searchQuery as AnyObject)[key] = [searchQuery[key], value];
    } else (searchQuery as AnyObject)[key] = value;
  });
  return searchQuery;
};

export default searchParamsToQuery;
