import * as useBasicRouter from '.';

const spy = jest.spyOn(useBasicRouter, 'default');

const useBasicRouterSpy = {
  ...spy,
  mock: ({
    refresh,
    push,
    replace,
    pushState,
    replaceState,
  }: Partial<ReturnType<typeof useBasicRouter['default']>> = {}) =>
    spy.mockReturnValue({
      refresh: refresh || jest.fn(),
      push: push || jest.fn(),
      replace: replace || jest.fn(),
      pushState: pushState || jest.fn(),
      replaceState: replaceState || jest.fn(),
    } as never),
};

export default useBasicRouterSpy;
