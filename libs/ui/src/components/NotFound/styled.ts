import excludeProps from '@/utils/helpers/excludeProps';
import { styled } from '@mui/material/styles';
import { NotFoundProps } from './types';

const name = 'NotFound';

type StyledProps = Pick<NotFoundProps, 'at'>;

const shouldForwardProp = excludeProps(['at', 'showIcon']);

export const StyledMessageWrapper = styled('div', {
  name,
  slot: 'messageWrapper',
  shouldForwardProp,
})<StyledProps>(({ theme, at }) => ({
  width: '100%',
  margin: theme.spacing(at === 'marketing-preference' ? 1 : 10, 0, '139px'),
  textAlign: 'center',
  textTransform: 'lowercase',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  '& > *': {
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
}));
