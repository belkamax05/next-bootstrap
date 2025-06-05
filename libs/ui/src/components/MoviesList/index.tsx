'use server';
import moviesListApi from '@/utils/api/moviesListApi';
import getQueryClient from '@/utils/query/getQueryClient';
import MoviesListItem from '../MoviesListItem';
import { StyledRoot } from './styled';

const MoviesList = async () => {
  const queryClient = getQueryClient();
  const data = await moviesListApi.getData({}, queryClient);
  return (
    <StyledRoot>
      {data.map((item) => (
        <MoviesListItem key={item.id} item={item} />
      ))}
    </StyledRoot>
  );
};

export default MoviesList;
