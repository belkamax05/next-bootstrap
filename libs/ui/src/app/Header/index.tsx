import UnstyledLink from '@/ui/styles/components/UnstyledLink';
import moviesListApi from '@/utils/api/moviesListApi';
import getQueryClient from '@/utils/query/getQueryClient';
import { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import HeaderTitlePlaceholder from './HeaderTitlePlaceholder';
import { StyledListItem, StyledNavList, StyledRoot } from './styled';

const LinkItem = ({ children, ...restLink }: PropsWithChildren<LinkProps>) => (
  <StyledListItem>
    <UnstyledLink {...(restLink as never as LinkProps)}>{children}</UnstyledLink>
  </StyledListItem>
);

const Header = () => {
  const queryClient = getQueryClient();
  const movies = moviesListApi.getData({}, queryClient);
  const moviesCount = movies?.length || 0;
  return (
    <StyledRoot component="header" title="Header" color="#d1874b">
      <HeaderTitlePlaceholder />
      <StyledNavList>
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/movies">
          Movies <strong>({moviesCount})</strong>
        </LinkItem>
        <LinkItem href="/examples">Examples</LinkItem>
        <LinkItem href="/blank">Blank</LinkItem>
      </StyledNavList>
    </StyledRoot>
  );
};

export default Header;
