'use client';
import LayoutSection from '@/ui/components/LayoutSection';
import { styled } from '@mui/material/styles';

const name = 'Main';

export const StyledRoot = styled(LayoutSection, { name, slot: 'root' })({
  flex: 1,
});
