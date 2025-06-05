'use client';

import ErrorBoundary from '@/ui/app/ErrorBoundary';
import { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    throw new Error('ErrorMsg');
  });
  return null;
};

export default () => {
  return (
    <ErrorBoundary origin="client-effect-boundary">
      <Component />
    </ErrorBoundary>
  );
};
