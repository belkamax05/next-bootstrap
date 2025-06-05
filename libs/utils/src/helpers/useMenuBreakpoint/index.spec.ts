import { renderHook } from '@testing-library/react';
import useMenuBreakpoint from '.';
import xcomregSpy from '../xcomreg/xcomreg/index.spy';

describe('useMenuBreakpoint', () => {
  it('should return "lg" when AMPLIENCE_MEGANAV_ENABLED is true', () => {
    xcomregSpy.mockValue('AMPLIENCE_MEGANAV_ENABLED', true);

    const { result } = renderHook(() => useMenuBreakpoint());

    expect(result.current).toBe('lg');
  });

  it('should return "desktop" when AMPLIENCE_MEGANAV_ENABLED is false', () => {
    xcomregSpy.mockValue('AMPLIENCE_MEGANAV_ENABLED', false);

    const { result } = renderHook(() => useMenuBreakpoint());

    expect(result.current).toBe('desktop');
  });
});
