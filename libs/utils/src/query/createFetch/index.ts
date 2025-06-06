import { AnyObject } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { CreateFetchInstance, CreateFetchOptions, CreateFetchUseFetchResult } from './types';

const createFetch = <TParams extends AnyObject, TData extends AnyObject>(
  options: CreateFetchOptions<TParams, TData>,
): CreateFetchInstance<TParams, TData> => {
  const { queryKey, fetchFn, validateParams, validateResult } = options;
  type TInstance = CreateFetchInstance<TParams, TData>;

  const fetch: TInstance['fetch'] = async (params) => {
    validateParams?.(params);
    const result = (await fetchFn(params)) as TData;
    validateResult?.(result);
    return result as TData;
  };

  const getQueryKey: TInstance['getQueryKey'] = (params) =>
    queryKey instanceof Array ? queryKey : queryKey(params);

  const getData: TInstance['getData'] = (params, queryClient) =>
    queryClient.getQueryData<TData>(getQueryKey(params));

  const getState: TInstance['getState'] = (params, queryClient) =>
    queryClient.getQueryState<TData, undefined>(getQueryKey(params));

  const prefetch: TInstance['prefetch'] = (params, queryClient) =>
    queryClient.prefetchQuery({
      queryKey: getQueryKey(params),
      queryFn: () => fetch(params),
    });

  const prefetchState: TInstance['prefetchState'] = async (params, queryClient) => {
    await prefetch(params, queryClient);
    return getState(params, queryClient);
  };

  const useFetch: TInstance['useFetch'] = (
    params,
    { enabled, initialData } = {},
  ): CreateFetchUseFetchResult<TParams, TData> => {
    const queryKey = useMemo(() => getQueryKey(params), [params]);
    const queryResult = useQuery<TData, unknown, TData>({
      queryKey: queryKey,
      queryFn: () => fetch(params),
      enabled: (enabled ?? true) as boolean,
      initialData,
    });

    return {
      ...queryResult,
      queryKey,
      params,
    } as CreateFetchUseFetchResult<TParams, TData>;
  };

  return {
    options,
    queryKey,
    getQueryKey,
    fetch,
    prefetch,
    prefetchState,
    getData,
    getState,
    useFetch,
  };
};

export * from './types';

export default createFetch;
