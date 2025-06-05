'use client';
import { Portal } from 'react-portal';
import { ConditionalPortalProps } from './types';

const ConditionalPortal = ({ condition, portalNodeId, children }: ConditionalPortalProps) => {
  if (condition)
    return <Portal node={document && document.getElementById(portalNodeId)}>{children}</Portal>;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default ConditionalPortal;
