import { Theme } from '@mui/material';

const muiCheckbox = (theme: Theme) => ({
  muiCheckbox: {
    styleOverrides: {
      root: {
        width: 45,
        height: 45,
        padding: 0,
      },
      checked: {
        width: 21,
        height: 21,
      },
      colorPrimary: {
        '&.Mui-checked': {
          color: theme.palette.canvas,
        },
      },
      colorSecondary: {
        '&.Mui-disabled': {
          color: theme.palette.canvas,
        },
      },
    },
  },
});

export default muiCheckbox;
