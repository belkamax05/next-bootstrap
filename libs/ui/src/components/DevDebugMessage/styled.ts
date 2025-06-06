'use client';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const name = 'DevDebugMessage';

export const StyledRoot = styled(Typography, {
  name,
  slot: 'root',
})(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '16px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  border: `1px dashed ${theme.palette.error.main}`,
  margin: theme.spacing(2, 0),
  padding: theme.spacing(2),
}));
