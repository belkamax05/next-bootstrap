import nonEmptyStartcase from '.';

describe('nonEmptyStartcase', () => {
  it('should return empty values as is', () => {
    expect(nonEmptyStartcase(null)).toBeNull();
    expect(nonEmptyStartcase(undefined)).toBeUndefined();
  });

  it('should return startcase result for non-empty values', () => {
    expect(nonEmptyStartcase('abc def')).toBe('Abc Def');
    expect(nonEmptyStartcase(42)).toBe('42');
  });
});
