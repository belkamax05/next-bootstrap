import { QueryKey } from '@tanstack/query-core';

/**
 * list of query keys to be saved into localStorage and restored on each session
 */
const persistQueryKeys: QueryKey[] = [
  // queryKeys.app.value,
];

export default persistQueryKeys;
