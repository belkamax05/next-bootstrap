import hotObjectKeys from '.';

describe('hotObjectKeys', () => {
  it('should return the keys of an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = hotObjectKeys(obj);
    expect(keys).toEqual(['a', 'b', 'c']);
  });
});
