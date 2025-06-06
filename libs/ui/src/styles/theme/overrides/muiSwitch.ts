import { Theme } from '@mui/material';

const muiSwitch = (theme: Theme) => ({
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: '45px',
        height: '25px',
        padding: '0',
      },
      switchBase: {
        padding: '0',
        top: '2px',
        left: '2px',
        [theme.breakpoints.up('lg')]: {
          '&:hover + .MuiSwitch-track': {
            backgroundColor: `${theme.palette.primaryHover.main}`,
          },
        },
        '&.Mui-checked + .MuiSwitch-track': {
          opacity: '1',
        },
      },
      thumb: {
        width: '21px',
        height: '21px',
      },
      track: {
        borderRadius: '15px',
      },
      colorPrimary: {
        '&.Mui-checked': {
          color: 'white',
        },
      },
      colorSecondary: {
        '&.Mui-disabled': {
          color: 'white',
        },
      },
    },
  },
});

export default muiSwitch;
