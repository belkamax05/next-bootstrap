import { QueryParams } from '../utils/QueryParams';

export interface DefaultNextProps<P = object> {
  params: Promise<P>;
  searchParams: Promise<QueryParams>;
}
