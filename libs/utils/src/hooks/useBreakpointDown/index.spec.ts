import { useMediaQuery } from '@mui/material';
import { renderHook } from '@testing-library/react';
import useBreakpointDown from '.';

jest.mock('@mui/material', () => ({
  useMediaQuery: jest.fn(),
}));

describe('useBreakpointDown', () => {
  it('should call useMediaQuery with the correct arguments', () => {
    renderHook(() => useBreakpointDown('md'));

    expect(useMediaQuery).toHaveBeenCalledWith(expect.any(Function), undefined);
  });
});
