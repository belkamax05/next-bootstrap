import { AnyObject } from '@/types';
import { DefinedUseQueryResult, QueryKey } from '@tanstack/react-query';

export type CreateFetchUseFetchResult<
  TParams extends AnyObject,
  TResult extends AnyObject,
> = DefinedUseQueryResult<TResult, unknown> & {
  params: TParams;
  queryKey: QueryKey;
};
