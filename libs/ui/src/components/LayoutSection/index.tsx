import { WithIntrinsicComponent } from '@/types';
import { PropsWithChildren } from 'react';
import { StyledInnerContainer, StyledRootContainer, StyledTitle } from './styled';

export interface LayoutSectionProps extends WithIntrinsicComponent {
  title?: string;
  color?: string;
  className?: string;
}

const LayoutSection = ({
  children,
  title,
  component = 'section',
  color,
  className,
}: PropsWithChildren<LayoutSectionProps>) => {
  return (
    <StyledRootContainer component={component} color={color} className={className}>
      <StyledInnerContainer>
        {title && <StyledTitle color={color}>{title}</StyledTitle>}
        {children}
      </StyledInnerContainer>
    </StyledRootContainer>
  );
};

export default LayoutSection;
