/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type */
import {
  PaletteColor,
  PaletteColorOptions,
  Theme,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';
import { fontFamily } from './config';
import getOverrides from './overrides';
import palette from './palette';

const theme: Theme = createTheme({
  palette,
  typography: {
    button: {
      textTransform: 'lowercase',
    },
    fontFamily,
    fontSize: 16,
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      smalldesktop: 1024,
      desktop: 1025,
      lg: 1400,
      xl: 1920,
    },
  },
});

theme.components = getOverrides(theme);

type PaletteKey = keyof typeof palette;
type PaletteInnerOverride = Record<PaletteKey, PaletteColor>;
type PaletteOptionsOverride = Record<PaletteKey, PaletteColorOptions>;

declare module '@mui/system' {
  interface BreakpointOverrides {
    smalldesktop: true;
    desktop: true;
  }
}

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends PaletteInnerOverride {}
  interface PaletteOptions extends PaletteOptionsOverride {}
}

export default responsiveFontSizes(theme);
