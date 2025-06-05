import { AnyObject } from '@/types';
import { QueryObserverOptions } from '@tanstack/react-query';

export type CreateFetchUseFetchOptions<TResult extends AnyObject> = Pick<
  QueryObserverOptions<TResult>,
  'enabled' | 'initialData'
>;
