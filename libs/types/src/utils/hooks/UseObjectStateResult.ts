import { AnyObject } from '../AnyObject';

export interface UseObjectStateResult<TState extends AnyObject> {
  state: TState;
  setState: (value: TState) => void;
  appendState: (value: Partial<TState>) => void;
  setProp: <TProp extends keyof TState>(prop: TProp, value: TState[TProp]) => void;
}
