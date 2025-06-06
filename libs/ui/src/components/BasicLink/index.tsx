import Link from 'next/link';
import { PropsWithChildren } from 'react';
import LinkWithRouter, { LinkWithRouterProps } from '../LinkWithRouter';
import { RouterLinkMode } from '../LinkWithRouter/types/RouterLinkMode';

const modesList: RouterLinkMode[] = ['push', 'pushState', 'replace', 'replaceState'];

export type BasicLinkProps = LinkWithRouterProps<RouterLinkMode>;

const BasicLink = ({ mode, ...linkProps }: PropsWithChildren<BasicLinkProps>) => {
  //? if no "prefetch" is passed or "BASIC_LINK_DISABLE_RSC" is true, we disable prefetch
  if (mode && modesList.includes(mode as RouterLinkMode))
    return <LinkWithRouter {...linkProps} mode={mode} />;
  return <Link {...linkProps} />;
};

export default BasicLink;
