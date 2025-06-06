import { DefaultNextProps, ServerComponent, WithQueryClient } from '@/types';
import LayoutSection from '@/ui/components/LayoutSection';
import { colour } from '@/ui/styles/theme/config';
import getAppQueryClient from '@/utils/query/getAppQueryClient';
import layoutState from '@/utils/state/layoutState';
import loadingPerformanceState from '@/utils/state/loadingPerformanceState';
import ErrorBoundary from '../ErrorBoundary';
import ServerHydrationBoundary from '../ServerHydrationBoundary';

export type CreatePageExtendedProps = DefaultNextProps & WithQueryClient;

export interface CreatePageOptions {
  title?: string;
}

const createPage =
  (
    Component: ServerComponent<CreatePageExtendedProps>,
    options?: CreatePageOptions,
  ): ServerComponent<DefaultNextProps> =>
  async ({ params, searchParams }: DefaultNextProps) => {
    try {
      const { title } = options || {};
      const queryClient = await getAppQueryClient();
      const childComponent = await Component({
        params,
        searchParams,
        queryClient,
      });
      if (title) layoutState.appendData({ title }, queryClient);
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
