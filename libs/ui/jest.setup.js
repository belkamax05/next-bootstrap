import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock(
  'next/image',
  () =>
    ({ blurDataURL, priority, loader, unoptimized, objectFit, ...props }) =>
      <img alt="mocked-incorrect-alt" {...props} />,
);
