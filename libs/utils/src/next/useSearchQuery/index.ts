import { QueryParams } from '@/types';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import searchParamsToQuery from '../searchParamsToQuery';

/**
 * useSearchParams transformed to Record<string, QueryParamType> to help use as an object
 */
const useSearchQuery = <TResult extends QueryParams>() => {
  const searchParams = useSearchParams();
  return useMemo(() => searchParamsToQuery<TResult>(searchParams), [searchParams]);
};

export default useSearchQuery;
