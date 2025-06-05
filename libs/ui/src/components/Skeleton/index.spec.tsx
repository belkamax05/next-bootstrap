import { render, screen } from '@/ui/utils/test-utils';
import Skeleton, { skeletonTestIds } from '.';

describe('Skeleton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Skeleton id="test" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render 5 loading bars', () => {
    render(<Skeleton count={5} id="test" />);
    const element = screen.queryByTestId(skeletonTestIds.skeleton);
    expect(element.children.length).toBe(5);
  });
});
