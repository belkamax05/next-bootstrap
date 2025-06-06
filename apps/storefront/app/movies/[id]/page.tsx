import { MoviesDetailedItemData } from '@/types';
import createPage from '@/ui/app/createPage';
import MoviesDetailedItem from '@/ui/components/MoviesDetailedItem';
import layoutState from '@/utils/state/layoutState';

export default createPage(async ({ params, queryClient }) => {
  const { id } = (await params) as { id: string };
  const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
  const movie = (await response.json()) as MoviesDetailedItemData;
  layoutState.appendData({ title: movie?.title || 'Movie' }, queryClient);
  return <MoviesDetailedItem item={movie} />;
});
