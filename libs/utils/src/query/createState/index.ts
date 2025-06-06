import { QueryKey, UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import noop from '../../helpers/noop';
import { CreateStateInstance } from './types/CreateStateInstance';
import { CreateStateUseClientResult } from './types/CreateStateUseClientResult';

/**
 * Creates react-query based state allowing to read and write data to the query cache
 * @param queryKey query key
 * @param initialData initial data
 * @returns react-query state methods, such as setData, getData, useData and queryKey
 * @example
 * const state = createState({
 *  queryKey: ['test'],
 *  initialData: 'test',
 * });
 */
const createState = <
  TQueryKey extends QueryKey,
  TData,
  TInstance extends CreateStateInstance<TQueryKey, TData>,
>(
  options: UseQueryOptions<TData, unknown, TData, TQueryKey>,
): TInstance => {
  const { queryKey, queryFn, initialData } = options;

  const prefetch: TInstance['prefetch'] = (queryClient) =>
    queryClient.prefetchQuery<TData, unknown, TData, TQueryKey>({ queryKey, initialData, queryFn });

  const getData: TInstance['getData'] = (queryClient) => queryClient.getQueryData<TData>(queryKey);

  const prefetchData: TInstance['prefetchData'] = async (queryClient) => {
    await prefetch(queryClient);
    return getData(queryClient);
  };

  const setData: TInstance['setData'] = (data, queryClient) =>
    queryClient.setQueryData<TData>(queryKey, data);

  const appendData: TInstance['appendData'] = (data, queryClient) =>
    setData({ ...getData(queryClient), ...data }, queryClient);

  const reset: TInstance['reset'] = (queryClient) => {
    const value = initialData instanceof Function ? initialData() : initialData;
    return setData(value, queryClient);
  };

  const useQueryInner: TInstance['useQuery'] = (props) => {
    return useQuery({
      queryKey,
      initialData,
      queryFn: queryFn || noop,
      ...(props || {}),
    }) as never;
  };

  const useData: TInstance['useData'] = (props) => useQueryInner(props)?.data;

  const useClient: TInstance['useClient'] = () => {
    const queryClient = useQueryClient();
    return useMemo(
      (): CreateStateUseClientResult<TData> => ({
        getData: () => getData(queryClient),
        setData: (data) => setData(data, queryClient),
        reset: () => reset(queryClient),
        useData: () => useData(),
      }),
      [queryClient],
    );
  };

  return {
    options,
    queryKey,
    prefetch,
    getData,
    prefetchData,
    setData,
    appendData,
    useData,
    useQuery: useQueryInner,
    reset,
    useClient,
  } as TInstance;
};

export * from './types';

export default createState;
