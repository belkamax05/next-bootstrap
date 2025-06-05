import { Theme } from '@mui/material/styles';
import { inputLabelFontSize } from '../config';

const muiIconButton = (theme: Theme) => ({
  MuiIconButton: {
    styleOverrides: {
      root: {
        fontSize: inputLabelFontSize,
        textTransform: 'capitalize',
        borderRadius: theme.shape.borderRadius,

        '& .MuiIconButton-label': {
          flexDirection: 'column',
        },

        [theme.breakpoints.up('lg')]: {
          '& .MuiIconButton-label': {
            flexDirection: 'row',
          },
        },
      },
      colorPrimary: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export default muiIconButton;
