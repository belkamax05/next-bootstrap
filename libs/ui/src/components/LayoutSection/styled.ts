'use client';
import { styled } from '@mui/material/styles';
import LayoutRootComponent from './LayoutRootComponent';

const name = 'LayoutSection';

export const StyledRootContainer = styled(LayoutRootComponent, { name, slot: 'rootContainer' })<{
  color: string;
}>(({ color }) => ({
  position: 'relative',
  backgroundColor: color,
  padding: 10,
}));

export const StyledInnerContainer = styled('div', { name, slot: 'innerContainer' })({
  height: '100%',
  borderRadius: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: 10,
  paddingTop: 40,
});

export const StyledTitle = styled('h2', { name, slot: 'title' })<{ color: string }>(
  ({ color }) => ({
    position: 'absolute',
    opacity: 0.6,
    top: 12,
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color,
  }),
);
