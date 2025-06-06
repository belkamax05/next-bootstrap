import { WithQueryClient } from '@/types';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const ServerHydrationBoundary = ({ children, queryClient }: PropsWithChildren<WithQueryClient>) => {
  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default ServerHydrationBoundary;
