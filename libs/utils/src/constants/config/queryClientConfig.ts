import { defaultShouldDehydrateQuery, QueryClientConfig } from '@tanstack/react-query';

/**
 * QueryClient's instance config for app
 */
const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
      gcTime: Infinity,
      retryOnMount: false,
    },
    dehydrate: {
      //? include pending queries in dehydration
      shouldDehydrateQuery: (query) =>
        defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
    },
  },
};

export default queryClientConfig;
