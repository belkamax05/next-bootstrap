'use client';
import LayoutSection from '@/ui/components/LayoutSection';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

const name = 'Header';

export const StyledRoot = styled(LayoutSection, { name, slot: 'root' })({
  textAlign: 'center',
});

export const StyledNavList = styled(List, { name, slot: 'navList' })({
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
});

export const StyledListItem = styled(ListItem, { name, slot: 'listItem' })({
  whiteSpace: 'nowrap',
});
