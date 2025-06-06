'use server';
import FooterStats from './FooterStats';
import { StyledRoot } from './styled';

const Footer = () => {
  return (
    <StyledRoot component="footer" title="Footer" color="#933760">
      <FooterStats />
    </StyledRoot>
  );
};

export default Footer;
