import excludeProps from '.';

describe('excludeProps', () => {
  it('should exclude specified properties', () => {
    const propsToExclude = ['rootPadTop', 'hide'];
    const shouldForwardProp = excludeProps(propsToExclude);

    expect(shouldForwardProp('rootPadTop')).toBe(false);
    expect(shouldForwardProp('hide')).toBe(false);
    expect(shouldForwardProp('otherProp')).toBe(true);
  });

  it('should return true for properties not in the exclude list', () => {
    const propsToExclude = ['rootPadTop', 'hide'];
    const shouldForwardProp = excludeProps(propsToExclude);

    expect(shouldForwardProp('someOtherProp')).toBe(true);
  });

  it('should handle an empty exclude list', () => {
    const propsToExclude: PropertyKey[] = [];
    const shouldForwardProp = excludeProps(propsToExclude);

    expect(shouldForwardProp('anyProp')).toBe(true);
  });

  it('should handle an empty string property', () => {
    const propsToExclude = ['rootPadTop', 'hide'];
    const shouldForwardProp = excludeProps(propsToExclude);

    expect(shouldForwardProp('')).toBe(true);
  });

  it('should handle non-string properties', () => {
    const propsToExclude = [123, 'hide'];
    const shouldForwardProp = excludeProps(propsToExclude);

    expect(shouldForwardProp(123)).toBe(false);
    expect(shouldForwardProp('hide')).toBe(false);
    expect(shouldForwardProp('otherProp')).toBe(true);
  });
});
