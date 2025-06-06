import { FC } from 'react';

/**
 * partialize a component props for unit tests, to avoid passing all props
 *
 * ! use with caution at buildable files
 * @param Component original component
 * @returns original component, each prop is optional
 * @example
 * const Component = partialComponent(OriginalComponent);
 * const Component = (props: Partial<OriginalComponentProps>) => <OriginalComponent {...props} />
 */
const partialComponent =
  <TProps,>(Component: FC<TProps>) =>
  (props: Partial<TProps>) =>
    <Component {...({} as TProps)} {...props} />;

export default partialComponent;
