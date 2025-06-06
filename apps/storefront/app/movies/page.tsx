import createPage from '@/ui/app/createPage';
import MoviesList from '@/ui/components/MoviesList';

export default createPage(
  async () => {
    return <MoviesList />;
  },
  { title: 'Movies' },
);
