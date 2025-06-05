import { SchemaOrgBase } from './SchemaOrgBase';

export interface OrganizationLdJson extends SchemaOrgBase {
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
}
