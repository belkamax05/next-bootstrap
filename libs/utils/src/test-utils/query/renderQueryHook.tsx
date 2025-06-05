import { QueryClient } from '@tanstack/react-query';
import { renderHook, RenderHookOptions } from '@testing-library/react';
import QueryWrapper from './QueryWrapper';

/**
 * QueryClientProvider wrapper over @testing-library renderHook
 * @param callback useQuery hook callback
 * @param options renderHook options
 * @returns {ReturnType<typeof renderHook>} result of renderHook
 * @example
 * const { result, waitForNextUpdate } = renderQueryHook(() => useQueryHookData());
 */
const renderQueryHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps> & { queryClient?: QueryClient },
) => {
  const { queryClient, ...restOptions } = options || {};
  const wrapper = (props: TProps) => <QueryWrapper queryClient={queryClient} {...props} />;
  const { ...rest } = renderHook(callback, {
    ...restOptions,
    wrapper,
  });
  return {
    ...rest,
  };
};

export default renderQueryHook;
