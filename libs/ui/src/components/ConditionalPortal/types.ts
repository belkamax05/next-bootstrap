import { PropsWithChildren } from 'react';

export type ConditionalPortalProps = PropsWithChildren<{
  condition: boolean;
  portalNodeId: string;
}>;
