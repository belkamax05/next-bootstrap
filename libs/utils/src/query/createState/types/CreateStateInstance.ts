import { QueryClient, QueryKey, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { CreateStateUseClientResult } from './CreateStateUseClientResult';

export interface CreateStateInstance<TQueryKey extends QueryKey, TData> {
  /** state queryKey */
  queryKey: TQueryKey;
  /** options passed to createState */
  options: UseQueryOptions<TData, unknown, TData, TQueryKey>;
  /** get data from queryClient state */
  prefetch: (queryClient: QueryClient) => Promise<void>;
  /** get data from queryClient state */
  getData: (queryClient: QueryClient) => TData;
  /** get data from queryClient state */
  prefetchData: (queryClient: QueryClient) => Promise<TData>;
  /** set data into queryClient state */
  setData: (data: TData, queryClient: QueryClient) => TData;
  /** set data into queryClient state */
  appendData: (data: Partial<TData>, queryClient: QueryClient) => TData;
  /** resets data to initial */
  reset: (queryClient: QueryClient) => TData;
  /** get data using react-query hook */
  useData: (props?: UseQueryOptions<TData>) => TData;
  useQuery: (props?: UseQueryOptions<TData>) => UseQueryResult<TData>;
  useClient: () => CreateStateUseClientResult<TData>;
}
