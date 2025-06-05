import removeUrlParam from '.';

describe('removeUrlParam', () => {
  it('removes the specified param from the middle of the query string', () => {
    const result = removeUrlParam({
      asPath: '/page?foo=1&bar=2&baz=3',
      paramName: 'bar',
    });
    expect(result).toBe('/page?foo=1&baz=3');
  });

  it('removes the specified param when it is the only param', () => {
    const result = removeUrlParam({
      asPath: '/page?bar=2',
      paramName: 'bar',
    });
    expect(result).toBe('/page');
  });

  it('removes the specified param when it is the first param', () => {
    const result = removeUrlParam({
      asPath: '/page?bar=2&baz=3',
      paramName: 'bar',
    });
    expect(result).toBe('/page?baz=3');
  });

  it('removes the specified param when it is the last param', () => {
    const result = removeUrlParam({
      asPath: '/page?foo=1&bar=2',
      paramName: 'bar',
    });
    expect(result).toBe('/page?foo=1');
  });

  it('does not change the URL if the param does not exist', () => {
    const result = removeUrlParam({
      asPath: '/page?foo=1&baz=3',
      paramName: 'bar',
    });
    expect(result).toBe('/page?foo=1&baz=3');
  });

  it('removes param when value is empty', () => {
    const result = removeUrlParam({
      asPath: '/page?foo=1&bar=&baz=3',
      paramName: 'bar',
    });
    expect(result).toBe('/page?foo=1&baz=3');
  });

  it('removes param when value contains special characters', () => {
    const result = removeUrlParam({
      asPath: '/page?foo=1&bar=a%20b%3Dc&baz=3',
      paramName: 'bar',
    });
    expect(result).toBe('/page?foo=1&baz=3');
  });

  it('works with URLs without query string', () => {
    const result = removeUrlParam({
      asPath: '/page',
      paramName: 'bar',
    });
    expect(result).toBe('/page');
  });

  it('removes param when it is at the end and no other params', () => {
    const result = removeUrlParam({
      asPath: '/page?bar=2',
      paramName: 'bar',
    });
    expect(result).toBe('/page');
  });
});
