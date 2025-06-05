import noop from '@/utils/helpers/noop';
import { useRouterSpy } from '@/utils/test-utils/spy/next/navigation';
import { renderHook } from '@testing-library/react';
import useBasicRouter from '.';
import historyRouterSpy from '../historyRouter/index.spy';

describe('useBasicRouter', () => {
  beforeEach(() => {
    useRouterSpy.mockImplementation(() => ({ push: noop, replace: noop, back: noop }));
    historyRouterSpy.pushState.mockImplementation(noop);
    historyRouterSpy.replaceState.mockImplementation(noop);
  });

  afterEach(jest.clearAllMocks);

  it('should return all methods from useRouter and historyRouter', () => {
    const {
      result: { current: router },
    } = renderHook(useBasicRouter);

    expect(router).toHaveProperty('push');
    expect(router).toHaveProperty('replace');
    expect(router).toHaveProperty('back');
    expect(router).toHaveProperty('pushState');
    expect(router).toHaveProperty('replaceState');
  });

  it('should call historyRouter.pushState when pushState is invoked', () => {
    const {
      result: { current: router },
    } = renderHook(useBasicRouter);

    const url = 'https://example.com';

    router.pushState(url);
    expect(historyRouterSpy.pushState).toHaveBeenCalledWith(url);
  });

  it('should call historyRouter.replaceState when replaceState is invoked', () => {
    const {
      result: { current: router },
    } = renderHook(useBasicRouter);

    const url = 'https://example.com';

    router.replaceState(url);
    expect(historyRouterSpy.replaceState).toHaveBeenCalledWith(url);
  });
});
