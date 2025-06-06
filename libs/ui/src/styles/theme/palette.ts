import { colour } from './config';

const palette = {
  primary: {
    main: colour.primary,
  },
  primaryDisabled: {
    main: colour.primaryDisabled,
  },
  primaryHover: {
    main: colour.primaryHover,
  },
  secondary: {
    main: colour.secondary,
  },
  secondaryHover: {
    main: colour.secondaryHover,
  },
  tertiary: {
    main: colour.tertiary,
  },
  canvas: {
    main: colour.canvas,
  },
  canvasInverse: {
    main: colour.canvasInverse,
  },
  promo: {
    main: colour.promo,
  },
  copy: {
    main: colour.copy,
  },
  defaultPrimary: {
    main: colour.defaultPrimary,
  },
  defaultSecondary: {
    main: colour.defaultSecondary,
  },
  defaultTertiary: {
    main: colour.defaultTertiary,
  },
  outline: {
    main: colour.outline,
  },
  error: {
    main: colour.error,
  },
  notDefault: {
    main: colour.error,
  },
  success: {
    main: colour.success,
  },
  background: {
    default: colour.canvas,
  },
  buttonDisabled: {
    main: colour.buttonDisabled,
  },
  mobileNavBorder: {
    main: colour.mobileNavBorder,
  },
  textDisabled: {
    main: colour.textDisabled,
  },
  copySecondary: {
    main: colour.copySecondary,
  },
  priceRed: {
    main: colour.priceRed,
  },
  anotherGrey: {
    main: colour.anotherGrey,
  },
} as const;

export default palette;
