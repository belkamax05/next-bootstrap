'use client';
import LayoutSection from '@/ui/components/LayoutSection';
import { styled } from '@mui/material/styles';

const name = 'Footer';

export const StyledRoot = styled(LayoutSection, { name, slot: 'root' })({
  textAlign: 'center',
});
