import removeSpaces from '.';

describe('removeSpaces', () => {
  const testString = 'PowerReclinerSofa';

  it('should return string with no spaces', () => {
    expect(removeSpaces(testString)).toEqual('Power Recliner Sofa');
  });
});
