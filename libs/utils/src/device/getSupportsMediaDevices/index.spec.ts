import getSupportsMediaDevices from '.';

describe('getSupportsMediaDevices', () => {
  let windowSpy;
  beforeEach(() => (windowSpy = jest.spyOn(window, 'window', 'get')));

  afterEach(() => windowSpy.mockRestore());

  it('should not fail when no props provided', () => {
    expect(getSupportsMediaDevices()).toBe(false);
  });

  it('should not fail when no window', () => {
    windowSpy.mockReturnValue(undefined);
    expect(getSupportsMediaDevices()).toBe(false);
  });

  it('should not fail when browser does not support api', () => {
    windowSpy.mockReturnValue({
      navigator: { mediaDevices: { enumerateDevices: false } },
    });
    expect(getSupportsMediaDevices()).toBe(false);
  });

  it('should successfully execute', () => {
    const catchFun = jest.fn(() => null);
    const thenFun = jest.fn(() => ({ catch: catchFun }));
    const replacedNavigator = {
      mediaDevices: {
        enumerateDevices: () => ({
          then: thenFun,
        }),
      },
    };
    windowSpy.mockReturnValue({
      navigator: replacedNavigator,
    });
    Object.defineProperty(global, 'navigator', {
      configurable: true,
      value: replacedNavigator,
    });
    expect(getSupportsMediaDevices()).toBe(true);
    expect(thenFun).toBeCalledTimes(1);
    expect(catchFun).toBeCalledTimes(1);
  });
});
