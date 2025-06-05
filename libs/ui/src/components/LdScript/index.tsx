'use server';
import { SchemaOrgBase } from '@/types';

export type LdScriptProps<TData extends SchemaOrgBase = SchemaOrgBase> = {
  data: TData;
};

const LdScript = <TData extends SchemaOrgBase>({ data }: LdScriptProps<TData>) => {
  if (!data) return null;
  const dataStr = JSON.stringify(data || {});
  return (
    <script
      type="application/ld+json"
      data-testid="schema-org-script"
      data-schema-type={data['@type']}
      dangerouslySetInnerHTML={{ __html: dataStr }}
    />
  );
};

export default LdScript;
