import createPage from '@/ui/app/createPage';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default createPage(
  async () => {
    return (
      <Box display="flex" flexDirection="column" gap={2}>
        <p>Homepage doesn't have any functionality yet.</p>
        <Link href="/movies" prefetch>
          Go to Movies
        </Link>
        <Link href="/examples" prefetch>
          Go to Examples
        </Link>
      </Box>
    );
  },
  { title: 'Homepage' },
);
