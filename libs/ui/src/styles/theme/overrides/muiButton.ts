import { Theme, alpha } from '@mui/material';
import { buttonCommon, inputLabelFontSize } from '../config';

const muiButton = (theme: Theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: inputLabelFontSize,
        padding: buttonCommon.buttonPadding.mobile,
        minWidth: 0,
        boxSizing: 'border-box',
        transition: buttonCommon.transition,
        '&:hover': {
          transform: 'translate(0, -2px)',
        },
        textTransform: 'lowercase',
        '& > span': {
          '&::first-letter': {
            textTransform: 'uppercase',
          },
        },
        '&::first-letter, & > span::first-letter': {
          textTransform: 'uppercase',
        },

        [theme.breakpoints.up('md')]: {
          padding: buttonCommon.buttonPadding.desktop,
        },
      },
      containedPrimary: {
        color: theme.palette.canvas.main,
        backgroundColor: theme.palette.primary.main,
        boxShadow: buttonCommon.borderShadow,
        '&:hover': {
          boxShadow: buttonCommon.borderShadowHover,
          backgroundColor: 'rgb(31, 0, 50)',
        },
        '&:disabled': {
          backgroundColor: theme.palette.buttonDisabled.main,
          color: theme.palette.canvas.main,
          opacity: 1,
        },
      },
      outlinedPrimary: {
        backgroundColor: 'transparent',
        color: theme.palette.canvas.main,
        borderColor: theme.palette.canvas.main,
        boxShadow: buttonCommon.borderShadow,
        [theme.breakpoints.up('md')]: {
          padding: buttonCommon.buttonPaddingBordered.desktop,
        },
        padding: buttonCommon.buttonPaddingBordered.mobile,
        '&:hover': {
          boxShadow: buttonCommon.borderShadowHover,
          border: 'solid 1px',
        },
        '&:disabled': {
          color: theme.palette.buttonDisabled.main,
          borderColor: theme.palette.buttonDisabled.main,
        },
      },
      outlinedSecondary: {
        backgroundColor: theme.palette.canvas.main,
        color: theme.palette.primary.main,
        border: `solid 1px ${alpha(theme.palette.primary.main, 0.5)}`,
        boxShadow: buttonCommon.borderShadow,
        [theme.breakpoints.up('md')]: {
          padding: buttonCommon.buttonPaddingBordered.desktop,
        },
        padding: buttonCommon.buttonPaddingBordered.mobile,
        '&:hover': {
          backgroundColor: theme.palette.canvas.main,
          boxShadow: buttonCommon.borderShadowHover,
          border: `solid 1px ${alpha(theme.palette.primary.main, 1)}`,
        },
        '&:disabled': {
          backgroundColor: theme.palette.canvas.main,
          color: theme.palette.buttonDisabled.main,
          borderColor: theme.palette.buttonDisabled.main,
          boxShadow: 'none',
        },
      },
      containedSecondary: {
        backgroundColor: theme.palette.canvas.main,
        color: theme.palette.primary.main,
        padding: buttonCommon.buttonPadding.mobile,
        '&:hover': {
          backgroundColor: theme.palette.canvas.main,
        },
        '&:disabled': {
          color: theme.palette.primary.main,
          background: theme.palette.buttonDisabled.main,
          opacity: 1,
        },
        [theme.breakpoints.up('md')]: {
          padding: buttonCommon.buttonPadding.desktop,
        },
      },
      contained: {
        color: theme.palette.canvas.main,
        boxShadow: buttonCommon.borderShadow,
        backgroundColor: theme.palette.secondary.main,
        padding: buttonCommon.buttonPadding.mobile,
        '&:hover': {
          boxShadow: buttonCommon.borderShadowHover,
          backgroundColor: theme.palette.secondaryHover.main,
        },
        '&:disabled': {
          color: theme.palette.canvas.main,
          backgroundColor: theme.palette.secondary.main,
          opacity: 0.4,
        },
        [theme.breakpoints.up('md')]: {
          padding: buttonCommon.buttonPadding.desktop,
        },
      },
    },
  },
});

export default muiButton;
