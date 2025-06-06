import { StyledMessageWrapper } from './styled';
import { NotFoundProps } from './types';

const NotFound = ({ at }: NotFoundProps) => {
  return (
    <StyledMessageWrapper data-testid="error-message" at={at}>
      Not found
    </StyledMessageWrapper>
  );
};
export default NotFound;
