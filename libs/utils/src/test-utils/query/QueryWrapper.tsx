import getQueryClient from '@/utils/query/getQueryClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useRef } from 'react';

/**
 * Provider for react-query hooks
 */
const QueryWrapper = ({
  children,
  queryClient: overrideQueryClient,
}: PropsWithChildren<{ queryClient?: QueryClient }>) => {
  const queryClient = useRef(getQueryClient());
  return (
    <QueryClientProvider client={overrideQueryClient || queryClient.current}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryWrapper;
