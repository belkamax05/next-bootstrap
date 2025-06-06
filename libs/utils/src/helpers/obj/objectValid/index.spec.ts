import objectValid from '.';

describe('objectValid', () => {
  it('should return true for a valid object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectValid(obj)).toBe(true);
  });

  it.each`
    obj
    ${null}
    ${undefined}
    ${'string'}
    ${[1, 2, 3]}
    ${true}
  `('should return false for $obj', ({ obj }) => {
    expect(objectValid(obj)).toBe(false);
  });
});
