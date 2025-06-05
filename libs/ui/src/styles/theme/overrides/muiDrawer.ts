import { Theme } from '@mui/material';

const muiDrawer = (theme: Theme) => ({
  MuiDrawer: {
    styleOverrides: {
      paper: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 480,
        },
      },
    },
  },
});

export default muiDrawer;
