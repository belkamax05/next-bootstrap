import { useMediaQuery } from '@mui/material';
import { renderHook } from '@testing-library/react';
import useBreakpointUp from '.';

jest.mock('@mui/material', () => ({
  useMediaQuery: jest.fn(),
}));

describe('useBreakpointUp', () => {
  it('should call useMediaQuery with the correct arguments', () => {
    renderHook(() => useBreakpointUp('md'));

    expect(useMediaQuery).toHaveBeenCalledWith(expect.any(Function), undefined);
  });
});
