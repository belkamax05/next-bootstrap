import objectPick from '.';

describe('objectPick', () => {
  it('should pick specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 } as const;
    const picked = objectPick(obj, ['a', 'c'] as const);
    expect(picked).toStrictEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no properties are picked', () => {
    const obj = { a: 1, b: 2, c: 3 } as const;
    const picked = objectPick(obj, [] as const);
    expect(picked).toStrictEqual({});
  });

  it('should ignore non-existing properties', () => {
    const obj = { a: 1, b: 2, c: undefined } as const;
    const picked = objectPick(obj, ['a', 'c', 'd' as never] as const);
    expect(picked).toStrictEqual({ a: 1, c: undefined });
  });
});
