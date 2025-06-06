import { AnyObject, MoviesListData } from '@/types';
import queryKeys from '@/utils/config/queryKeys';
import createFetch from '@/utils/query/createFetch';

const moviesListApi = createFetch({
  queryKey: (_: AnyObject) => queryKeys.movies.list,
  fetchFn: async (_: AnyObject) => {
    console.log('--- Fetching movies list data...');
    const response = await fetch('https://ghibliapi.vercel.app/films?fields=id,title,image');
    const movies = (await response.json()) as MoviesListData;
    return movies;
  },
});

export default moviesListApi;
