'use client';
import { useReportWebVitals } from 'next/web-vitals';
import { FC } from 'react';

export interface WebVitalsProps {
  logs?: boolean;
}

const WebVitals: FC<WebVitalsProps> = ({ logs }) => {
  useReportWebVitals((metric) => {
    window.nextJsMetrics = window.nextJsMetrics || {};
    window.nextJsMetrics[metric.name] = {
      ...metric,
      values: [...(window.nextJsMetrics[metric.name]?.values || []), metric.value],
    };
    if (logs) console.log('[WebVitals]', metric);
  });
  return null;
};

export default WebVitals;
