import { ENV_DEV } from '@/utils/constants/app/env';
import { TypographyProps } from '@mui/material';
import { StyledRoot } from './styled';

const DevDebugMessage = (props: TypographyProps) => {
  if (!ENV_DEV) return null;
  return <StyledRoot {...props} />;
};

export default DevDebugMessage;
