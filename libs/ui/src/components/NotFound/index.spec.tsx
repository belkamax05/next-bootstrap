import { render } from '@/ui/utils/test-utils';
import NotFound from '.';
import { NotFoundProps } from './types';

describe('Not Found Component', () => {
  const props: NotFoundProps = {
    description: 'Whoops',
    title: 'Whoops title',
    showIcon: true,
  };
  it('should render', () => {
    const { baseElement } = render(<NotFound {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render component with title & description', () => {
    const { baseElement } = render(<NotFound {...props} showIcon={false} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should show an error component', () => {
    const { getByTestId } = render(<NotFound {...props} />);
    expect(getByTestId('error-message')).not.toBeNull();
  });
  it('should show an error component with h3 error text', () => {
    const { getByTestId } = render(<NotFound {...props} />);
    expect(getByTestId('error-text')).not.toBeNull();
  });

  it('should display title if showIcon is false', () => {
    const { getByText } = render(<NotFound {...props} showIcon={false} />);
    expect(getByText(props.title)).not.toBeNull();
  });
});
