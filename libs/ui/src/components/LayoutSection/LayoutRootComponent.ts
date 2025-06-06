import { WithIntrinsicComponent } from '@/types';
import { createElement, PropsWithChildren } from 'react';

const LayoutRootComponent = ({
  children,
  component,
  className,
}: PropsWithChildren<WithIntrinsicComponent & { className?: string }>) =>
  createElement(component || 'div', { className }, children);

export default LayoutRootComponent;
