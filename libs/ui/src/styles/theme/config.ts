export const inputHeight = 45;
export const inputLabelFontSize = 14;
export const inputFontSize = 14;
export const fontFamily: string = ['Poppins', 'sans-serif'].join(',');

export const colour = {
  error: '#ca2a30',
  //!legacy below
  primary: '#2D0048', // purple
  primaryDisabled: '#281048',
  primaryHover: '#2E0048', // dark purple
  secondary: '#B4006D', // pink
  secondaryHover: '#9D005F', // dark pink
  tertiary: '#EFECF3', // light purple
  canvas: '#FFFFFF', // white
  canvasInverse: '#000000', // black
  promo: '#FFCF4E', // yellow
  success: '#25880D', // green
  copy: '#554B62', // Grey
  outline: '#D9D9D9', // dim purple
  defaultPrimary: '#DEDEDE', // Grey
  defaultSecondary: '#C4C4C4', // mid grey
  defaultTertiary: '#F1F1F1', // light grey
  anotherGrey: '#939295', // another light grey
  disabled: 'white',
  textDisabled: '#D3D3D3',
  buttonDisabled: '#8D7498',
  mobileNavBorder: '#C1C1C1',
  copySecondary: '#939295',
  priceRed: '#EB002F',
  priceRedSecondary: '#E91839',
} as const;

export const megaNav = {
  lineHeight: '50px',
  mobieMegaNavWidth: '90%',
  mobileNavBoxShadow: '0 8px 10px #0000001a',
} as const;

export const padding = {
  sm: '5px',
  md: '10px',
  lg: '15px',
  xl: '20px',
} as const;

export const defaultValues = {
  iconHeight: '20px',
  iconWidth: '20px',
  iconHeightLg: '50px',
  iconWidthLg: '50px',
  fontsizeXs: '12px',
  fontsizeSm: '14px',
  fontsizeMd: '16px',
} as const;

export const margin = {
  sm: '5px',
  md: '10px',
  lg: '15px',
  xl: '20px',
} as const;

export const buttonCommon = {
  buttonPadding: {
    desktop: '10px 50px',
    mobile: '10px 40px',
  },
  buttonPaddingBordered: {
    desktop: '8px 50px',
    mobile: '8px 40px',
  },
  borderShadow: '0px 3px 6px #00000026',
  borderShadowHover: '0px 3px 6px #00000033',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
} as const;
