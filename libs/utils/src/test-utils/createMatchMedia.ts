import mediaQuery from 'css-mediaquery';

function createMatchMedia(width: number) {
  return (query) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    media: query,
    onchange: null,
    addListener: () => jest.fn(),
    removeListener: () => jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
}

export default createMatchMedia;
