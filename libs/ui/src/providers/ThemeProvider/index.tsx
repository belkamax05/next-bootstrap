'use client';
import theme from '@/ui/styles/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

const ThemeProvider = ({ children }: PropsWithChildren) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
