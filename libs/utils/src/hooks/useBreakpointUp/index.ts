import { Breakpoint, Theme, UseMediaQueryOptions, useMediaQuery } from '@mui/material';

const useBreakpointUp = (breakpoint: Breakpoint, options?: UseMediaQueryOptions) =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint), options);

export default useBreakpointUp;
