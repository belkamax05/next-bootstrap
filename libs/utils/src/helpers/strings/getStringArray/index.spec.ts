import getStringArray from '.';

describe('getStringArray', () => {
  it('should return input string', () => {
    const input = 'apple,banana,carrot';
    const expectedOutput = 'apple,banana,carrot';
    expect(getStringArray(input)).toEqual(expectedOutput);
  });

  it('should return first inner array', () => {
    const input = [
      ['apple', 'banana', 'carrot'],
      ['dog', 'elephant', 'fox'],
    ];
    const expectedOutput = ['apple', 'banana', 'carrot'];
    expect(getStringArray(input)).toEqual(expectedOutput);
  });

  it('should return an empty string', () => {
    const input = '';
    const expectedOutput = '';
    expect(getStringArray(input)).toEqual(expectedOutput);
  });

  it('should handle strings with spaces correctly', () => {
    const input = 'apple, banana, carrot';
    const expectedOutput = 'apple, banana, carrot';
    expect(getStringArray(input)).toEqual(expectedOutput);
  });
});
