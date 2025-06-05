import { DefaultNextProps, ServerComponent, WithQueryClient } from '@/types';
import LayoutSection from '@/ui/components/LayoutSection';
import { colour } from '@/ui/styles/theme/config';
import getAppQueryClient from '@/utils/query/getAppQueryClient';
import loadingPerformanceState from '@/utils/state/loadingPerformanceState';
import ErrorBoundary from '../ErrorBoundary';
import ServerHydrationBoundary from '../ServerHydrationBoundary';

export type CreatePageExtendedProps = DefaultNextProps & WithQueryClient;

const createPage =
  (Component: ServerComponent<CreatePageExtendedProps>): ServerComponent<DefaultNextProps> =>
  async ({ params, searchParams }: DefaultNextProps) => {
    try {
      const queryClient = await getAppQueryClient();
      const childComponent = await Component({
        params,
        searchParams,
        queryClient,
      });

      loadingPerformanceState.appendData({ pageLoaded: Date.now() }, queryClient);
      return (
        <ServerHydrationBoundary queryClient={queryClient}>
          <ErrorBoundary>{childComponent}</ErrorBoundary>
        </ServerHydrationBoundary>
      );
    } catch (error) {
      return (
        <LayoutSection title="SSR Error" color={colour.error}>
          {typeof error === 'object' && <p>{(error as Error)?.message}</p>}
        </LayoutSection>
      );
    }
  };

export default createPage;
