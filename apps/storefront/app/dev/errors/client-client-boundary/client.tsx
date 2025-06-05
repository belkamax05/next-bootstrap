'use client';

import ErrorBoundary from '@/ui/app/ErrorBoundary';

const Component = () => {
  throw new Error('ErrorMsg');
};

export default () => {
  return (
    <ErrorBoundary origin="client-client-boundary">
      <Component />
    </ErrorBoundary>
  );
};
