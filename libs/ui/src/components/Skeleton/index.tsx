import { StyledContainer, StyledLine } from './styled';
import { SkeletonProps } from './types';

export const skeletonTestIds = {
  skeleton: 'skeleton',
  skeletonElement: 'skeletonElement',
} as const;

const Skeleton = ({ animated, count = 1, id }: SkeletonProps) => {
  return (
    <StyledContainer data-testid={skeletonTestIds.skeleton}>
      {[...new Array(count)].map((_, index) => (
        <StyledLine
          id={`skeleton_${id}_${index}`}
          animated={animated}
          key={`skeleton_${id}_${index}`}
          data-testid={skeletonTestIds.skeletonElement}
        >
          &zwnj;
        </StyledLine>
      ))}
    </StyledContainer>
  );
};

export default Skeleton;
