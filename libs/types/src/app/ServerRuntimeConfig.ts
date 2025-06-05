import { SiteConfig } from './SiteConfig';

export interface ServerRuntimeConfig {
  storesConfig: {
    UK: unknown;
  };
  siteConfigs: SiteConfig[];
  globalConfig: Record<string, unknown>;
}
