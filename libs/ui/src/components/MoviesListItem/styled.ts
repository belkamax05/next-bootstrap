'use client';
import UnstyledLink from '@/ui/styles/components/UnstyledLink';
import { styled } from '@mui/material/styles';

const name = 'MoviesListItem';

export const StyledRoot = styled(UnstyledLink, {
  name,
  slot: 'root',
})({
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-2px)',
    transition: 'transform .2s ease-in-out',
  },
});
