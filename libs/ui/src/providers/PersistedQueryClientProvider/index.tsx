'use client';
import queryPersister from '@/utils/helpers/persist/queryPersister';
import getQueryClient from '@/utils/query/getQueryClient';
import { QueryClient } from '@tanstack/react-query';
import {
  persistQueryClient,
  PersistQueryClientProvider,
} from '@tanstack/react-query-persist-client';
import { PropsWithChildren, useMemo } from 'react';

const PersistedQueryClientProvider = ({
  client,
  children,
}: PropsWithChildren<{ client?: QueryClient }>) => {
  const queryClient = useMemo(() => {
    const instance = client || getQueryClient();
    persistQueryClient({
      queryClient: instance,
      persister: queryPersister,
      maxAge: Infinity,
      buster: '',
      hydrateOptions: undefined,
      dehydrateOptions: undefined,
    });
    return instance;
  }, [client]);
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: queryPersister }}>
      {children}
    </PersistQueryClientProvider>
  );
};

export default PersistedQueryClientProvider;
