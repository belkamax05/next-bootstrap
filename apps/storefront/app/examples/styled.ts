'use client';

import LayoutSection from '@/ui/components/LayoutSection';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import { StyledComponent } from '@mui/styles/styled';
import Link, { LinkProps } from 'next/link';

const name = 'Examples';

export const StyledRoot = styled(LayoutSection, { name, slot: 'root' })({
  textAlign: 'center',
});

export const StyledNavList = styled(List, { name, slot: 'navList' })({
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
});

export const StyledLink: StyledComponent<LinkProps> = styled(Link, {
  name,
  slot: 'link',
})({
  textDecoration: 'none',
  color: 'inherit',
}) as never;

export const StyledListItem = styled(ListItem, {
  name,
  slot: 'listItem',
})({
  whiteSpace: 'nowrap',
});
