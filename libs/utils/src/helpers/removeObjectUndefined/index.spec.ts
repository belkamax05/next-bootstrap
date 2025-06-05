import removeObjectUndefined from '.';

describe('removeObjectUndefined', () => {
  it("should clean object from 'undefined'", () => {
    expect(
      removeObjectUndefined({
        a: 1,
        b: undefined,
        c: 3,
      }),
    ).toStrictEqual({
      a: 1,
      c: 3,
    });
  });
});
