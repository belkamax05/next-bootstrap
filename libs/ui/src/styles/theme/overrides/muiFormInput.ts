import { Theme } from '@mui/material/styles';
import Colour from 'color';
import { inputFontSize, inputHeight, inputLabelFontSize } from '../config';

const muiFormInput = (theme: Theme) => ({
  MuiFormLabel: {
    styleOverrides: {
      root: {
        '&.MuiInputLabel-root': {
          fontSize: inputLabelFontSize,
          fontWeight: 500,
          color: theme.palette.primary.main,
          lineHeight: 1,
          '&.Mui-disabled': {
            color: `${Colour(theme.palette.primary.main).alpha(0.5)}`,
          },
          '&.Mui-error': {
            color: theme.palette.error.main,
          },
          textTransform: 'lowercase',
          display: 'inline-block',
          '&:first-letter': {
            textTransform: 'uppercase',
          },
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        top: theme.spacing(0.5),
        height: inputHeight,
        border: `1px solid ${theme.palette.outline.main}`,
        color: theme.palette.copy.main,
        fontSize: inputFontSize,
        borderRadius: 4,
        paddingRight: '0px !important',

        '&.Mui-focused': {
          border: `1px solid ${theme.palette.copy.main}`,
        },
        '&:hover:not(.Mui-disabled)': {
          border: `1px solid ${theme.palette.copy.main}`,
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette.defaultTertiary.main,
          color: `${Colour(theme.palette.copy.main).alpha(0.5)}`,
        },
        '&.Mui-error': {
          border: `1px solid ${theme.palette.error.main}`,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          display: 'none',
        },
      },
      input: {
        display: 'flex',
        alignItems: 'center',
        fontSize: inputLabelFontSize,
        '&.MuiOutlinedInput-input': {
          padding: theme.spacing(1),
        },
        '&::placeholder': {
          color: `${Colour(theme.palette.copy.main).alpha(0.5)}`,
        },
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        '&.MuiInputAdornment-positionEnd > button': {
          height: inputHeight + 1,
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: 12,
        marginTop: theme.spacing(0.5),
      },
    },
  },
});

export default muiFormInput;
