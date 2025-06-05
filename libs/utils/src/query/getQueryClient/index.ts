import { isServer, QueryClient } from '@tanstack/react-query';
import { cache } from 'react';
import makeQueryClient from '../makeQueryClient';

let browserQueryClient: QueryClient = undefined;
const createOnClient = () => {
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
};

const makeCachedQueryClient = cache(makeQueryClient);

const getQueryClient = () => (isServer ? makeCachedQueryClient() : createOnClient());

export default getQueryClient;
