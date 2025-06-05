'use client';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const name = 'MoviesList';

export const StyledRoot = styled(Box, {
  name,
  slot: 'root',
})({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
});
