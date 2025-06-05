import { BreakpointOverrides, RegularBreakpoints } from '@mui/material';

/**
 * RegularBreakpoints breakpoints extended with overrides
 */
export interface GridBreakpoints
  extends RegularBreakpoints,
    Partial<Record<keyof BreakpointOverrides, RegularBreakpoints['xl']>> {}
