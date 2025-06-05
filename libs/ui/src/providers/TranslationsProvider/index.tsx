'use client';
import initTranslations from '@/component-library/i18n/initTranslations';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { TranslationsProviderProps } from './types/TranslationsProviderProps';

const TranslationsProvider = ({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderProps) => {
  const i18n = createInstance();
  initTranslations(locale, namespaces, i18n, resources);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
