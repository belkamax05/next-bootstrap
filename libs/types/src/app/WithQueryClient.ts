import { QueryClient } from '@tanstack/query-core';
import { AnyObject } from '../utils';

export type WithQueryClient<P extends AnyObject = AnyObject> = P & {
  queryClient: QueryClient;
};
