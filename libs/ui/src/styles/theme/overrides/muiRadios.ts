import { Theme } from '@mui/material';

const muiRadios = (theme: Theme) => ({
  MuiRadio: {
    styleOverrides: {
      root: {
        color: theme.palette.primaryHover.main,
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export default muiRadios;
