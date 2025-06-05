import { AnyObject } from '@/types';
import { createContext, PropsWithChildren, use } from 'react';

export const CONTEXT_NOT_PROVIDED_ERROR =
  '[CONTEXT_NOT_PROVIDED_ERROR] useContext must be used within a Provider';

const createProvider = <TValue extends AnyObject>(initialValue: TValue) => {
  const Context = createContext<TValue | undefined>(initialValue);

  const Provider = ({ children, value }: PropsWithChildren<{ value: TValue }>) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  const Consumer = Context.Consumer;

  const useContext = () => {
    const value = use(Context);
    if (!value) {
      //? will throw if no "initialValue" is provided and not wrapped in a Provider
      throw new Error(CONTEXT_NOT_PROVIDED_ERROR);
    }
    return value;
  };
  return { initialValue, Context, Provider, Consumer, useContext };
};

export default createProvider;
