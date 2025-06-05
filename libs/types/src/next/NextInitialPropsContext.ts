import { DefaultNextProps } from '@/types';
import { QueryClient } from '@tanstack/query-core';

export interface NextInitialPropsContext<TParams = object> extends DefaultNextProps<TParams> {
  queryClient: QueryClient;
}
