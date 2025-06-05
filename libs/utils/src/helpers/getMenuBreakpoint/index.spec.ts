import getMenuBreakpoint from '.';
import xcomregSpy from '../xcomreg/xcomreg/index.spy';

describe('getMenuBreakpoint', () => {
  it('should return "lg" when AMPLIENCE_MEGANAV_ENABLED is true', () => {
    xcomregSpy.mockValue('AMPLIENCE_MEGANAV_ENABLED', true);

    const result = getMenuBreakpoint(null);

    expect(result).toBe('lg');
  });

  it('should return "desktop" when AMPLIENCE_MEGANAV_ENABLED is false', () => {
    xcomregSpy.mockValue('AMPLIENCE_MEGANAV_ENABLED', false);

    const result = getMenuBreakpoint(null);

    expect(result).toBe('desktop');
  });
});
