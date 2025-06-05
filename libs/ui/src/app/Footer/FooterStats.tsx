'use client';

import LayoutSection from '@/ui/components/LayoutSection';
import loadingPerformanceState from '@/utils/state/loadingPerformanceState';

const FooterStats = () => {
  const { initialTime, layoutLoaded, pageLoaded } = loadingPerformanceState.useData();
  const layoutLoadingTime = layoutLoaded ? layoutLoaded - initialTime : null;
  const pageLoadingTime = pageLoaded && initialTime ? pageLoaded - initialTime : null;
  return (
    <LayoutSection title="Stats" color="#933760">
      <p>Layout Loading Time: {layoutLoadingTime}ms</p>
      <p>Page Loading Time: {pageLoadingTime}ms</p>
    </LayoutSection>
  );
};

export default FooterStats;
