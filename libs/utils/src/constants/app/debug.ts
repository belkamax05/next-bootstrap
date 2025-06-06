import { ENV_DEV } from './env';

const prodDebugValues = {
  ENABLE_ESPOT_DEBUG: false,
} as const;

const devDebugValues = {
  //? keep disabled, enable when you need it
  ENABLE_ESPOT_DEBUG: false,
} as const;

export const { ENABLE_ESPOT_DEBUG } = (() => {
  if (ENV_DEV) {
    return devDebugValues;
  }
  return prodDebugValues;
})();
