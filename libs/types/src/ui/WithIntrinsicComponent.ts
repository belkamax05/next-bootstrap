import { JSX } from 'react';

export interface WithIntrinsicComponent {
  component?: keyof JSX.IntrinsicElements;
}
