import IntlPolyfill from 'intl';
import 'intl/locale-data/jsonp/en';

if (global.Intl) {
  Intl.NumberFormat = IntlPolyfill.NumberFormat;
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
} else {
  global.Intl = IntlPolyfill;
}

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => null),
      },
    };
  },
  Trans: jest.fn(() => 'Mock Translated String'),
}));

jest.mock('next/config', () => () => {
  const globalConfig = require('@/config/global.config.json');
  return {
    serverRuntimeConfig: {
      globalConfig: {
        ...globalConfig.server,
      },
    },
    publicRuntimeConfig: {
      globalConfig: {
        ...globalConfig.client,
      },
    },
  };
});

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

global.dataLayer = global.dataLayer || {
  push: jest.fn().mockImplementation(() => {
    jest.fn();
  }),
};
