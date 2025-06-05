import createFetch from '.';

/**
 * Spy wrapper for api endpoint
 * @param endpoint endpoint result of createFetch
 * @returns spy object
 */
const createFetchSpy = (api: ReturnType<typeof createFetch>) => {
  const fetch = jest.spyOn(api, 'fetch') as jest.Mock;
  const useFetch = jest.spyOn(api, 'useFetch') as jest.Mock;
  const getState = jest.spyOn(api, 'getState') as jest.Mock;
  const prefetch = jest.spyOn(api, 'prefetch') as jest.Mock;
  const prefetchState = jest.spyOn(api, 'prefetchState') as jest.Mock;
  return {
    fetch,
    useFetch,
    getState,
    prefetch,
    prefetchState,
  };
};

export default createFetchSpy;
