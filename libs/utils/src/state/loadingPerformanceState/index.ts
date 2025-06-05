import queryKeys from '@/utils/config/queryKeys';
import createState from '@/utils/query/createState';

const loadingPerformanceState = createState({
  queryKey: queryKeys.loadingPerformance,
  initialData: {
    initialTime: null as number,
    layoutLoaded: null as number,
    pageLoaded: null as number,
  },
});

export default loadingPerformanceState;
