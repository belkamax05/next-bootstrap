import shallowEqual from '.';

describe('shallowEqual', () => {
  it('should return true for the same object reference', () => {
    const obj = { a: 1, b: 2 };
    expect(shallowEqual(obj, obj)).toBe(true);
  });

  it('should return true for objects with the same keys and values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(shallowEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for objects with different keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, c: 2 };
    expect(shallowEqual(obj1, obj2 as never)).toBe(false);
  });

  it('should return false for objects with different values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    expect(shallowEqual(obj1, obj2)).toBe(false);
  });

  it('should return false if one object has extra keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2, c: 3 };
    expect(shallowEqual(obj1, obj2)).toBe(false);
  });

  it('should return false if one of the objects is null', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = null;
    expect(shallowEqual(obj1, obj2)).toBe(false);
  });

  it('should return false if one of the objects is not an object', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = 42;
    expect(shallowEqual(obj1, obj2 as never)).toBe(false);
  });

  it('should return true for empty objects', () => {
    const obj1 = {};
    const obj2 = {};
    expect(shallowEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for objects with the same keys but different types of values', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: '1' };
    expect(shallowEqual(obj1, obj2 as never)).toBe(false);
  });

  it('primitive types should be compared by value', () => {
    const obj1 = 1;
    const obj2 = 1;
    const obj3 = 2;
    expect(shallowEqual(obj1 as never, obj2 as never)).toBe(true);
    expect(shallowEqual(obj1 as never, obj3 as never)).toBe(false);
  });
});
