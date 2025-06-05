'use server';
import ErrorBoundary from '@/ui/app/ErrorBoundary';
import Footer from '@/ui/app/Footer';
import Header from '@/ui/app/Header';
import Main from '@/ui/app/Main';
import ServerHydrationBoundary from '@/ui/app/ServerHydrationBoundary';
import WebVitals from '@/ui/app/WebVitals';
import PersistedQueryClientProvider from '@/ui/providers/PersistedQueryClientProvider';
import ThemeProvider from '@/ui/providers/ThemeProvider';
import getAppQueryClient from '@/utils/query/getAppQueryClient';
import loadingPerformanceState from '@/utils/state/loadingPerformanceState';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';
import './global.scss';

export default async ({ children }: PropsWithChildren) => {
  const queryClient = await getAppQueryClient();
  loadingPerformanceState.appendData({ layoutLoaded: Date.now() }, queryClient);
  return (
    <html lang="en">
      <head>
        <WebVitals />
      </head>
      <body>
        <PersistedQueryClientProvider>
          <ServerHydrationBoundary queryClient={queryClient}>
            <AppRouterCacheProvider>
              <ThemeProvider>
                {/* <TitleHeader title="Default title in layout" /> */}
                <CssBaseline />
                <Header />
                <Main>
                  <ErrorBoundary>{children}</ErrorBoundary>
                </Main>
                <Footer />
                <ReactQueryDevtools initialIsOpen={false} />
              </ThemeProvider>
            </AppRouterCacheProvider>
          </ServerHydrationBoundary>
        </PersistedQueryClientProvider>
      </body>
    </html>
  );
};
