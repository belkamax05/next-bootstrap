import queryKeys from '@/utils/config/queryKeys';
import createState from '@/utils/query/createState';

const layoutState = createState({
  queryKey: queryKeys.app.layout,
  initialData: {
    title: '',
  },
});

export default layoutState;
