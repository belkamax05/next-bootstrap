import hotLowerCase from '.';

describe('hotLowerCase', () => {
  it('should handle undefined input', () => {
    expect(hotLowerCase(undefined)).toEqual(undefined);
  });

  it('should handle empty input', () => {
    expect(hotLowerCase('')).toEqual('');
  });

  it('should convert uppercase string to lowercase', () => {
    expect(hotLowerCase('HELLO')).toEqual('hello');
  });

  it('should not convert already lowercase string', () => {
    expect(hotLowerCase('hello')).toEqual('hello');
  });

  it('should convert mixed case string to lowercase', () => {
    expect(hotLowerCase('HeLlO')).toEqual('hello');
  });
});
