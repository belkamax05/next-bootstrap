import imageLoader from '.';

describe('imageLoader', () => {
  it('returns src as result', () => {
    expect(imageLoader({ src: 'url', width: 0, quality: 0 })).toBe('url');
  });
});
