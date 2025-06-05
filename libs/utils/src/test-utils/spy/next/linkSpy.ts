const linkSpy = jest.fn();

jest.mock('next/link', () => ({
  ...jest.requireActual('next/link').default,
  default: jest.fn(),
}));

export default linkSpy;
