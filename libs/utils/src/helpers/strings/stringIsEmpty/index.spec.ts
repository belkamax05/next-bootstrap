import stringIsEmpty from '.';

describe('stringIsEmpty', () => {
  const empty1 = '';
  const empty2 = '   ';
  const notEmpty = 'test';

  it('should return boolean based on whether prop is empty', () => {
    expect(stringIsEmpty(empty1)).toBeTruthy();
    expect(stringIsEmpty(empty2)).toBeTruthy();
    expect(stringIsEmpty(notEmpty)).toBeFalsy();
  });
});
