import { SiteConfig } from './SiteConfig';

export interface AppConfig extends SiteConfig {
  domain: string;
  apiUrl: string;
}
