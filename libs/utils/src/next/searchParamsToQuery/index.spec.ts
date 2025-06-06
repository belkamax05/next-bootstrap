import { ReadonlyURLSearchParams } from 'next/navigation';
import searchParamsToQuery from '.';

describe('searchParamsToQuery', () => {
  it('should return an object with all search params', () => {
    const searchParams = new ReadonlyURLSearchParams('foo=bar&baz=qux');
    const result = searchParamsToQuery(searchParams);
    expect(result).toEqual({ foo: 'bar', baz: 'qux' });
  });
});
