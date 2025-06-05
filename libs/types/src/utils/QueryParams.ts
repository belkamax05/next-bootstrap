import { QueryParamType } from './QueryParamType';

/**
 * Provides Record of supported query param types
 */
export type QueryParams<TParams = QueryParamType> = Record<string, TParams>;
