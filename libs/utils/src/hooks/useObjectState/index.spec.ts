import { AnyObject } from '@/types';
import { act, renderHook } from '@testing-library/react';
import useObjectState from '.';

const setup = (initialState: AnyObject) => renderHook(() => useObjectState(initialState));

describe('useObjectState', () => {
  const initialState = { a: 4, b: 2 };

  it('should return initialState', () => {
    const {
      result: { current },
    } = setup(initialState);

    expect(current.state).toEqual(initialState);
  });

  it('should setState', async () => {
    const changedState = { a: 3, b: 3 };
    const { result, rerender } = setup(initialState);

    expect(result.current.state).toEqual(initialState);

    act(() => result.current.setState(changedState));
    act(() => rerender());

    expect(result.current.state).toEqual(changedState);
  });

  it('should appendState', async () => {
    const { result, rerender } = setup(initialState);

    expect(result.current.state).toEqual(initialState);

    act(() => result.current.appendState({ a: 3 }));
    act(() => rerender());

    expect(result.current.state).toEqual({ ...initialState, a: 3 });
  });

  it('should setProp few keys simultaneously', async () => {
    const changedState = { a: 3, b: 3 };
    const { result, rerender } = setup(initialState);

    expect(result.current.state).toEqual(initialState);

    act(() => result.current.setProp('a', 3));
    act(() => result.current.setProp('b', 3));
    act(() => rerender());

    expect(result.current.state).toEqual(changedState);
  });
});
