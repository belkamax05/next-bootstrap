import { MoviesDetailedItemData } from '@/types';
import createPage from '@/ui/app/createPage';
import TitleHeader from '@/ui/app/TitleHeader';
import MoviesDetailedItem from '@/ui/components/MoviesDetailedItem';

export default createPage(async ({ params }) => {
  const { id } = (await params) as { id: string };
  const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
  const movie = (await response.json()) as MoviesDetailedItemData;
  return (
    <>
      <TitleHeader title={movie.title} />
      <MoviesDetailedItem item={movie} />
    </>
  );
});
