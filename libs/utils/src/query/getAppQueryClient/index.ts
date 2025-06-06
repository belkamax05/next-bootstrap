'use server';
import moviesListApi from '@/utils/api/moviesListApi';
import loadingPerformanceState from '@/utils/state/loadingPerformanceState';
import { cache } from 'react';
import getQueryClient from '../getQueryClient';

/**
 * Returns preloaded queryClient with data needed for the application
 *
 * @returns {Promise<Object>} An object containing application data.
 */
const getAppQueryClient = async () => {
  const initialTime = Date.now();
  const queryClient = getQueryClient();

  loadingPerformanceState.appendData({ initialTime }, queryClient);

  //? fetch global data
  await moviesListApi.prefetch({}, queryClient);

  return queryClient;
};

export default cache(getAppQueryClient);
