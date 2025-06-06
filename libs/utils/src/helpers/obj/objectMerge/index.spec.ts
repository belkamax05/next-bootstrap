import objectMerge from '.';

describe('objectMerge', () => {
  it('should return an empty object if both inputs are invalid', () => {
    const result = objectMerge(null, undefined);
    expect(result).toEqual({});
  });

  it('should return the second object if the first is invalid', () => {
    const obj2 = { b: 2 };
    const result = objectMerge(null, obj2);
    expect(result).toEqual(obj2);
  });

  it('should return the first object if the second is invalid', () => {
    const obj1 = { a: 1 };
    const result = objectMerge(obj1, undefined);
    expect(result).toEqual(obj1);
  });

  it('should merge two valid objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const result = objectMerge(obj1, obj2);
    expect(result).toEqual({ ...obj1, ...obj2 });
  });

  it('should overwrite properties in the first object with properties in the second object', () => {
    const obj1 = { a: 1, c: 3 };
    const obj2 = { b: 2, c: 4 };
    const result = objectMerge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 2, c: 4 });
  });
});
