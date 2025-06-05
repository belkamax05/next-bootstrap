import { ReactElement } from 'react';

export type ServerComponent<TProps> = (
  props: TProps,
) => Promise<ReactElement> | ReactElement | null;
