import objectOmit from '.';

describe('objectOmit', () => {
  it('should omit specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 } as const;
    const omitted = objectOmit(obj, ['a', 'c'] as const);
    expect(omitted).toEqual({ b: 2 });
  });

  it('should return the same object if no properties are omitted', () => {
    const obj = { a: 1, b: 2, c: 3 } as const;
    const omitted = objectOmit(obj, [] as const);
    expect(omitted).toEqual(obj);
  });

  it('should ignore non-existing properties', () => {
    const obj = { a: 1, b: 2, c: 3 } as const;
    const omitted = objectOmit(obj, ['a', 'd' as never] as const);
    expect(omitted).toEqual({ b: 2, c: 3 });
  });
});
