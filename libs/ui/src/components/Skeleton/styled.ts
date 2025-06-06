import excludeProps from '@/utils/helpers/excludeProps';
import { keyframes, styled } from '@mui/material/styles';
import { SkeletonProps } from './types';

interface LineProps extends SkeletonProps {
  animated?: boolean;
}

const shimmer = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const name = 'Skeleton';

export const StyledContainer = styled('div', {
  name,
  slot: 'container',
  shouldForwardProp: excludeProps(['width']),
})<{ width?: SkeletonProps['width'] }>(({ width }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: width || '100%',
}));

export const StyledLine = styled('span', {
  name,
  slot: 'line',
  shouldForwardProp: excludeProps([
    'height',
    'borderRadius',
    'color',
    'highlightColor',
    'space',
    'animated',
  ]),
})<LineProps>(
  ({
    height = '100%',
    borderRadius = '0px',
    color = 'rgba(0, 0, 0, 0.1)',
    highlightColor = 'rgba(0, 0, 0, 0.14)',
    space = '10px',
    animated,
  }) => ({
    backgroundImage: `linear-gradient(90deg, ${color} 8%, ${highlightColor} 18%,  ${color} 33%)`,
    borderRadius,
    backgroundSize: '200% 100%',
    display: 'block',
    width: '100%',
    height,
    minHeight: '5px',
    marginBottom: space,
    position: 'relative',
    overflow: 'hidden',
    '&:last-of-type': {
      marginBottom: 0,
    },
    ...(animated && {
      animation: `${shimmer} 1.5s infinite linear`,
      animationTimingFunction: 'linear',
    }),
  }),
);
