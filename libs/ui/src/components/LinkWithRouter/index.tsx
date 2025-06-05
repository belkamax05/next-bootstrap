'use client';
import useBasicRouter from '@/utils/next/useBasicRouter';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { RouterLinkMode } from './types/RouterLinkMode';

export interface LinkWithRouterProps<TMode = RouterLinkMode> extends LinkProps {
  mode?: TMode;
}

const LinkWithRouter = ({ href, mode, ...linkProps }: PropsWithChildren<LinkWithRouterProps>) => {
  const router = useBasicRouter();
  return (
    <Link
      {...linkProps}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        if (mode === 'push') return router.push(href as string);
        if (mode === 'replace') return router.replace(href as string);
        if (mode === 'pushState') return router.pushState(href as string);
        if (mode === 'replaceState') return router.replaceState(href as string);
      }}
    />
  );
};

export default LinkWithRouter;
