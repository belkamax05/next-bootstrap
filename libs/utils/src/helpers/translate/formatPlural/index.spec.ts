import formatPlural from '.';

describe('formatPlural function', () => {
  it('should return singular for 1', () => {
    expect(formatPlural(1)).toBe('singular');
  });

  it('should return plural for 2', () => {
    expect(formatPlural(2)).toBe('plural');
  });

  it('should return error for undefined', () => {
    expect(formatPlural(undefined)).toBe('error');
  });
});
