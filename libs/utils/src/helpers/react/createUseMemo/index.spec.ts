import { renderHook } from '@testing-library/react';
import createUseMemo from '.';

describe('createUseMemo', () => {
  it('should return a memoized function', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = createUseMemo(mockFn);

    const { result, rerender } = renderHook(() => memoizedFn(1, 2));

    expect(result.current).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);

    rerender();
    expect(mockFn).toHaveBeenCalledTimes(1); //? Memoized, so no re-computation
  });

  it('should recompute when arguments change', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = createUseMemo(mockFn);

    const { result, rerender } = renderHook(({ a, b }) => memoizedFn(a, b), {
      initialProps: { a: 1, b: 2 },
    });

    expect(result.current).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);

    rerender({ a: 2, b: 3 });
    expect(result.current).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(2); //? Arguments changed, so recomputation occurs
  });

  it('should handle functions with no arguments', () => {
    const mockFn = jest.fn(() => 'test');
    const memoizedFn = createUseMemo(mockFn);

    const { result, rerender } = renderHook(() => memoizedFn());

    expect(result.current).toBe('test');
    expect(mockFn).toHaveBeenCalledTimes(1);

    rerender();
    expect(mockFn).toHaveBeenCalledTimes(1); //? Memoized, so no re-computation
  });
});
