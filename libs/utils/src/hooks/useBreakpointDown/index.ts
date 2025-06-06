import { Breakpoint, Theme, UseMediaQueryOptions, useMediaQuery } from '@mui/material';

const useBreakpointDown = (breakpoint: Breakpoint, options?: UseMediaQueryOptions) =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint), options);

export default useBreakpointDown;
