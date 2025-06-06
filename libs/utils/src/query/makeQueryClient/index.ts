import queryClientConfig from '@/utils/constants/config/queryClientConfig';
import { QueryClient } from '@tanstack/react-query';

const makeQueryClient = () => new QueryClient(queryClientConfig);

export default makeQueryClient;
