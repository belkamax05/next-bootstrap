import { ServerRuntimeConfig } from '@/types';
import getConfig from 'next/config';

const getServerRuntimeConfig = (): ServerRuntimeConfig => {
  const { serverRuntimeConfig } = getConfig() || {};
  return serverRuntimeConfig || {};
};

export default getServerRuntimeConfig;
