import { render } from '@testing-library/react';
import partialComponent from '.';

describe('partialComponent', () => {
  const TestComponent = ({ name, age }: { name: string; age: number }) => (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );

  it('renders the component with partial props', () => {
    const PartialTestComponent = partialComponent(TestComponent);
    const { getByText } = render(<PartialTestComponent name="John" />);
    expect(getByText('Name: John')).toBeInTheDocument();
  });

  it('renders the component with full props', () => {
    const PartialTestComponent = partialComponent(TestComponent);
    const { getByText } = render(<PartialTestComponent name="John" age={25} />);
    expect(getByText('Name: John')).toBeInTheDocument();
    expect(getByText('Age: 25')).toBeInTheDocument();
  });
});
