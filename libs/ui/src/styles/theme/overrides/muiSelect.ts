import { Theme } from '@mui/material/styles';
import { inputFontSize } from '../config';

const muiSelect = (theme: Theme) => ({
  MuiSelect: {
    styleOverrides: {
      root: {
        textAlign: 'left',
        fontSize: inputFontSize,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        [theme.breakpoints.up('xs')]: {
          fontSize: inputFontSize,
        },
        color: theme.palette.copy.main,
        '&::hover': {
          backgroundColor: theme.palette.defaultTertiary.main,
        },
        '&.Mui-selected': {
          backgroundColor: theme.palette.defaultTertiary.main,
        },
      },
    },
  },
  MuiListItemAvatar: {
    root: {
      minWidth: theme.spacing(4.5),
    },
  },
  MuiListItemText: {
    root: {
      '& .MuiTypography-root': {
        fontSize: inputFontSize,
      },
    },
  },
  MuiAvatar: {
    square: {
      width: 28,
      height: 'auto',
    },
  },
});

export default muiSelect;
