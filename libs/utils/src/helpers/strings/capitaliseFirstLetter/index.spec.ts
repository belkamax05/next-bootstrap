import capitaliseFirstLetter from '.';

describe('capitaliseFirstLetter function', () => {
  it('should capitalise the first letter of each string in the array', () => {
    const input = ['apple', 'banana', 'cherry'];
    const expected = ['Apple', 'Banana', 'Cherry'];
    const result = capitaliseFirstLetter(input);
    expect(result).toEqual(expected);
  });

  it('should handle an array with a single string', () => {
    const input = ['grape'];
    const expected = ['Grape'];
    const result = capitaliseFirstLetter(input);
    expect(result).toEqual(expected);
  });

  it('should return an empty array when given an empty array', () => {
    const input = [];
    const expected = [];
    const result = capitaliseFirstLetter(input);
    expect(result).toEqual(expected);
  });

  it('should not change the rest of the characters in each string', () => {
    const input = ['mango', 'Peach', 'WATERMELON'];
    const expected = ['Mango', 'Peach', 'WATERMELON'];
    const result = capitaliseFirstLetter(input);
    expect(result).toEqual(expected);
  });

  it('should handle strings with non-alphabetic characters', () => {
    const input = ['123apple', '!banana', '.cherry'];
    const expected = ['123apple', '!banana', '.cherry'];
    const result = capitaliseFirstLetter(input);
    expect(result).toEqual(expected);
  });
});
