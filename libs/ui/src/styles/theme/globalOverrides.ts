import { colour, fontFamily } from './config';

const globalOverrides = {
  body: {
    fontFamily,
    fontSize: 14,
    lineHeight: '25px',
    fontWeight: 400,
    color: colour.copy,
  },
  hr: {
    border: 'none',
    backgroundColor: colour.defaultTertiary,
    height: '1px',
  },
  h1: {
    fontSize: 26,
    fontWeight: 500,
    lineHeight: '34px',
    color: colour.primary,
  },
  h2: {
    fontSize: 22,
    fontWeight: 500,
    lineHeight: '30px',
    color: colour.primary,
  },
  h3: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '25px',
    color: colour.primary,
  },
  h4: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '25px',
    color: colour.primary,
  },
  h5: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '25px',
    color: colour.primary,
  },
  h6: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '18px',
    color: colour.primary,
  },
};

export default globalOverrides;
