import { AnyObject, UseObjectStateResult } from '@/types';
import shallowEqual from '@/utils/helpers/obj/shallowEqual';
import { useCallback, useReducer } from 'react';

const useObjectState = <TState extends AnyObject>(
  initialState: TState,
): UseObjectStateResult<TState> => {
  const [state, dispatch] = useReducer(
    <TType extends keyof TState | 'setState' | 'appendState'>(
      state: TState,
      action: {
        type: TType;
        value: TType extends 'setState'
          ? TState
          : TType extends 'appendState'
          ? Partial<TState>
          : TState[TType];
      },
    ): TState => {
      const { type: actionType, value } = action;
      switch (actionType) {
        case 'setState': {
          if (shallowEqual(state, value as TState[TType])) return state;
          return value as TState[TType];
        }
        case 'appendState': {
          const changedState = { ...state, ...value };
          if (shallowEqual(state, changedState)) return state;
          return changedState;
        }
        default: {
          if (value === state[actionType]) return state;
          if (shallowEqual(state, { ...state, [actionType]: value })) return state;
          return {
            ...state,
            [actionType]: value,
          };
        }
      }
    },
    initialState,
  );

  const setState: UseObjectStateResult<TState>['setState'] = useCallback(
    (value) => dispatch({ type: 'setState', value }),
    [],
  );

  const appendState: UseObjectStateResult<TState>['appendState'] = useCallback(
    (value) => dispatch({ type: 'appendState', value }),
    [],
  );

  const setProp: UseObjectStateResult<TState>['setProp'] = useCallback(
    (prop, value) => dispatch({ type: prop, value }),
    [],
  );

  return {
    state,
    setProp,
    setState,
    appendState,
  };
};

export default useObjectState;
