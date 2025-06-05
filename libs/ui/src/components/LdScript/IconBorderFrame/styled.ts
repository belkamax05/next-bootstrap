import excludeProps from '@/utils/helpers/excludeProps';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { IconBorderFrameProps } from './types';

const name = 'IconBorderFrame';

export const StyledRoot = styled(Box, {
  name,
  slot: 'root',
  shouldForwardProp: excludeProps(['size', 'svgSize', 'backgroundColor']),
})<Pick<IconBorderFrameProps, 'size' | 'svgSize' | 'backgroundColor'>>(
  ({ theme, size, svgSize, backgroundColor }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: size,
    minWidth: size,
    position: 'relative',
    border: `1px solid ${theme.palette.copy.main}`,
    borderRadius: 4,
    padding: 2,
    backgroundColor,
    '& > div > div > img': {
      display: 'none',
    },
    '& svg': {
      width: svgSize,
      height: svgSize,
    },
  }),
);
