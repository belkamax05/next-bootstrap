import IconImage from '@/component-library/components/image/IconImage';
import { pdpAttributeColorWheelTestIds } from '@/component-library/pages/PdpV2/components/PdpAttributeColorWheel';
import { render } from '@/ui/utils/test-utils';
import IconBorderFrame from '.';
import { IconBorderFrameProps } from './types';

const setup = (props?: Partial<IconBorderFrameProps>) =>
  render(
    <IconBorderFrame
      size={20}
      before={<div data-testid={pdpAttributeColorWheelTestIds.icon}>PdpAttributeColorWheel</div>}
      layout={<IconImage name="imageName" src="imageSrc" alt="imageAlt" />}
      {...props}
    />,
  );

describe('IconBorderFrame', () => {
  it('should match snapshot', () => {
    const { baseElement } = setup();

    expect(baseElement).toMatchSnapshot();
  });

  it('should render image', () => {
    const { getByAltText } = setup();

    expect(getByAltText('imageAlt')).toBeInTheDocument();
  });

  it('should render colour wheel', () => {
    const { getByTestId } = setup();

    expect(getByTestId(pdpAttributeColorWheelTestIds.icon)).toBeInTheDocument();
  });

  it('should not render colour wheel', () => {
    const { queryByTestId } = setup({ before: null });

    expect(queryByTestId(pdpAttributeColorWheelTestIds.icon)).not.toBeInTheDocument();
  });
  it('show image if src and name is available', () => {
    const { getByAltText } = setup();

    expect(getByAltText('imageAlt')).toBeVisible();
  });

  it('should show svg if svg is present', () => {
    const { getByText, baseElement } = setup({
      before: null,
      layout: <>SVG Content</>,
    });

    expect(baseElement).toMatchSnapshot();
    expect(getByText('SVG Content')).toBeVisible();
  });
});
