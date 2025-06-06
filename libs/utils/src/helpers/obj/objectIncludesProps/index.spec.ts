import objectIncludesProps from '.';

describe('objectIncludesProps', () => {
  it('should return false if the object is invalid', () => {
    const result = objectIncludesProps(null, ['a']);
    expect(result).toBe(false);
  });

  it('should return true if the object includes all the keys', () => {
    const result = objectIncludesProps({ a: 1, b: 2, c: 3 }, ['a', 'b']);
    expect(result).toBe(true);
  });

  it('should return false if the object does not include all the keys', () => {
    const result = objectIncludesProps({ a: 1, b: 2, c: 3 }, ['a', 'd' as never]);
    expect(result).toBe(false);
  });

  it('should return true if the keys array is empty', () => {
    const result = objectIncludesProps({ a: 1, b: 2, c: 3 }, []);
    expect(result).toBe(true);
  });
});
