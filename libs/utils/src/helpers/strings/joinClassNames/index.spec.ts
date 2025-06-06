import joinClassNames from '.';

describe('joinClassNames', () => {
  it('should join class names from two objects', () => {
    const obj1 = { a: 'class1', b: 'class2' };
    const obj2 = { c: 'class3', d: 'class4' };

    const result = joinClassNames(obj1, obj2);

    expect(result).toEqual({
      ...obj1,
      ...obj2,
    });
  });

  it('should not include keys with falsy class names', () => {
    const obj1 = { a: 'class1', b: '', e: 'class-e1' };
    const obj2 = { c: 'class3', d: null, e: 'class-e2' };

    const result = joinClassNames(obj1, obj2);

    expect(result).toEqual({
      a: 'class1',
      c: 'class3',
      e: 'class-e1 class-e2',
    });
  });

  it('should support more than two arguments', () => {
    const obj1 = { a: 'class1', b: 'class2' };
    const obj2 = { c: 'class3', d: 'class4' };
    const obj3 = { e: 'class5', f: 'class6' };

    const result = joinClassNames(obj1, obj2, obj3);

    expect(result).toEqual({
      a: 'class1',
      b: 'class2',
      c: 'class3',
      d: 'class4',
      e: 'class5',
      f: 'class6',
    });
  });

  it('should not fail when no arguments are passed', () => {
    expect(joinClassNames({}, {})).toEqual({});
    expect(joinClassNames(null, null)).toEqual({});
  });
});
