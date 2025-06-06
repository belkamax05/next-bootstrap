import { StyledRoot } from './styled';
import { IconBorderFrameProps } from './types';

const IconBorderFrame = ({
  layout,
  backgroundColor = 'transparent',
  before,
  className,
  size,
  svgSize,
}: IconBorderFrameProps) => {
  return (
    <StyledRoot
      className={className}
      size={size}
      svgSize={svgSize}
      backgroundColor={backgroundColor}
    >
      {before}
      {layout}
    </StyledRoot>
  );
};
export default IconBorderFrame;
