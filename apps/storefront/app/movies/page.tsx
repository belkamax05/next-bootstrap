import createPage from '@/ui/app/createPage';
import TitleHeader from '@/ui/app/TitleHeader';
import MoviesList from '@/ui/components/MoviesList';

export default createPage(async () => {
  return (
    <>
      <TitleHeader title="Movies" />
      <MoviesList />
    </>
  );
});
