import { AppConfig } from '@/types';
import queryKeys from '../../config/queryKeys';
import createState from '../../query/createState';

export const initialData: AppConfig = {
  storeId: '',
  locale: 'en-GB',
  domain: '',
} as AppConfig;

const configState = createState({
  queryKey: queryKeys.app.config,
  initialData,
});

export default configState;
