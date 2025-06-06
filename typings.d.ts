import type { Metric } from 'next/dist/compiled/web-vitals';
import React from 'react';

declare global {
  interface Window {
    rTapNotifyDOMChange: (e: HTMLElement) => void | undefined;
    nextJsMetrics: Record<string, Metric>;
  }
}

declare module 'react' {
  interface ImgHTMLAttributes<T> extends React.HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
