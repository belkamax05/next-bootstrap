'use server';
import { NextGetConfigResult } from '@/types';
import moviesListApi from '@/utils/api/moviesListApi';
import configState from '@/utils/state/configState';
import loadingPerformanceState from '@/utils/state/loadingPerformanceState';
import getConfig from 'next/config';
import { headers } from 'next/headers';
import { cache } from 'react';
import getQueryClient from '../getQueryClient';

/**
 * Returns preloaded queryClient with data needed for the application
 *
 * @returns {Promise<Object>} An object containing application data.
 */
const getAppQueryClient = async () => {
  const initialTime = Date.now();
  const heads = await headers();
  const domain = heads.get('host');
  const { publicRuntimeConfig } = (getConfig() || {}) as NextGetConfigResult;
  const queryClient = getQueryClient();

  loadingPerformanceState.appendData({ initialTime }, queryClient);

  const { API_URL: apiUrl } = publicRuntimeConfig.globalConfig || {};
  configState.appendData({ domain, apiUrl }, queryClient);

  //? fetch global data
  await moviesListApi.prefetch({}, queryClient);

  return queryClient;
};

export default cache(getAppQueryClient);
