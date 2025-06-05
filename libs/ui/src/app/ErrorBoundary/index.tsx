'use client';
import LayoutSection from '@/ui/components/LayoutSection';
import { colour } from '@/ui/styles/theme/config';
import { Component, PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{ fallback?: ReactNode }>;

class ErrorBoundary extends Component<Props, { hasError: boolean; error: Error }> {
  preffix: string;
  constructor(props: Props) {
    super(props);
    this.preffix = '[ErrorBoundary]';
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: unknown) {
    console.error('[ErrorBoundary] Error got caught in ErrorBoundary component');
    console.log('Error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.log(this.preffix, {
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <LayoutSection title="Error Boundary" color={colour.error}>
          <p>{this.state.error?.message || 'An error occurred'}</p>
        </LayoutSection>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
