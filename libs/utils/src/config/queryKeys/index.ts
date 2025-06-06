import { DeepRecord, QueryKeyFunction } from '@/types';
import { QueryKey } from '@tanstack/react-query';
import validateConfigType from '../../helpers/validateConfigType';

/**
 * reuseable query keys for react-query, every key should be compatible with QueryKey (string | number | serializable object)[]
 */
const queryKeys = validateConfigType(
  {
    app: {
      config: ['app', 'config'],
      layout: ['app', 'layout'],
      routerChange: ['app', 'routerChange'],
    },
    dev: {
      espotDebugVisibility: ['dev', 'espotDebugVisibility'],
    },
    loadingPerformance: ['loadingPerformance'],
    movies: {
      list: ['movies', 'list'],
      details: (id: string) => ['movies', 'details', id],
    },
  } as const,
  null as DeepRecord<string, QueryKey | QueryKeyFunction>,
);

export default queryKeys;
