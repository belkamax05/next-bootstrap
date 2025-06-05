import { PublicGlobalConfig } from './PublicGlobalConfig';
import { ServerGlobalConfig } from './ServerGlobalConfig';
import { SiteConfig } from './SiteConfig';

export interface NextGetConfigResult {
  publicRuntimeConfig: {
    globalConfig: PublicGlobalConfig;
  };
  serverRuntimeConfig: {
    globalConfig: ServerGlobalConfig;
    storesConfig: {
      UK: unknown;
      IRL: unknown;
    };
    siteConfigs: SiteConfig[];
  };
}
