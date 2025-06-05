import { PropsWithChildren } from 'react';
import { StyledRoot } from './styled';

const Main = ({ children }: PropsWithChildren) => {
  return (
    <StyledRoot component="main" title="Main" color="#0dbc79">
      {children}
    </StyledRoot>
  );
};

export default Main;
