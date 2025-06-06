'use client';
import UnstyledLink from '@/ui/styles/components/UnstyledLink';
import excludeProps from '@/utils/helpers/excludeProps';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const name = 'MoviesDetailedItem';

export const StyledRoot = styled(Paper, {
  name,
  slot: 'root',
})({
  position: 'relative',
  flexDirection: 'column',
});

export const StyledBackground = styled('div', {
  name,
  slot: 'background',
  shouldForwardProp: excludeProps(['backgroundImage']),
})<{ backgroundImage: string }>(({ backgroundImage }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.3,
}));

export const StyledContent = styled('div', {
  name,
  slot: 'content',
})({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  gap: '16px',
});

export const StyledBackLink = styled(UnstyledLink, {
  name,
  slot: 'backLink',
})({
  fontSize: '18px',
  fontWeight: 'bold',
});
