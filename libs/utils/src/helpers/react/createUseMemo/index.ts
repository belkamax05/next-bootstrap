import { AnyFunction } from '@/types';
import { useMemo } from 'react';

/**
 * A utility function to create a memoized version of a function using React's useMemo hook.
 * This is useful for optimizing performance in React components by preventing unnecessary re-computations.
 */
const createUseMemo = <TFn extends AnyFunction>(fn: TFn): TFn =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ((...args) => useMemo(() => fn(...args), [fn, ...args])) as never as TFn;

export default createUseMemo;
