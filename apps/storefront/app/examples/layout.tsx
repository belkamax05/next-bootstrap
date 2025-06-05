'use server';
import TitleHeader from '@/ui/app/TitleHeader';
import LayoutSection from '@/ui/components/LayoutSection';
import { colour } from '@/ui/styles/theme/config';
import { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { StyledLink, StyledListItem, StyledNavList } from './styled';

const LinkItem = ({ children, ...restLink }: PropsWithChildren<LinkProps>) => (
  <StyledListItem>
    <StyledLink {...(restLink as never as LinkProps)}>{children}</StyledLink>
  </StyledListItem>
);

export default async ({ children }: PropsWithChildren) => {
  return (
    <div>
      <TitleHeader title="Examples" />
      <LayoutSection title="Examples" color="#2472c8">
        <StyledNavList>
          <LinkItem href="/movies">Movies list</LinkItem>
        </StyledNavList>
        <LayoutSection title="Error examples" color={colour.error}>
          <StyledNavList>
            <LinkItem href="/examples/server-error">Server error</LinkItem>
            <LinkItem href="/examples/client-error">Client error</LinkItem>
            <LinkItem href="/examples/not-found">Not found error</LinkItem>
          </StyledNavList>
        </LayoutSection>
      </LayoutSection>
      {children}
    </div>
  );
};
