import { ServerDataValue } from '@/types';
import type { Metric } from 'next/dist/compiled/web-vitals';
import React from 'react';

declare global {
  interface Window {
    rTapNotifyDOMChange: (e: HTMLElement) => void | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ThreeSixty?: any;
    // dataLayer?: Array<string | number | boolean>;
    //? reused by node_modules/visearch-javascript-sdk/types/shared.d.ts
    newrelic?: {
      addPageAction: (event: string, eventData) => void;
      setCustomAttribute: (key: string, pageData) => void;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    opera?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MSStream?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Trustpilot?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initSBI?: any;
    __SERVER_DATA__: ServerDataValue;
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
