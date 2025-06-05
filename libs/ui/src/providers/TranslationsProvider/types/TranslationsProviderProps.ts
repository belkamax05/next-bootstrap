import { Resource } from 'i18next';
import { ReactNode } from 'react';

export interface TranslationsProviderProps {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}
