jest.mock('next/headers', () => ({
  headers: jest.fn(),
  cookies: jest.fn(),
}));

export const headersSpy = {
  headers: require('next/headers').headers,
  cookies: require('next/headers').cookies,
};

export default headersSpy;
