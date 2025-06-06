import splitString from '.';

describe('splitString function', () => {
  it('should split a string by dashes and underscores and return an array', () => {
    const result = splitString('a-b_c');
    expect(result).toEqual(['a', '-', 'b', '_', 'c']);
  });

  it('should return an array with the original string if no dashes or underscores are present', () => {
    const result = splitString('abc');
    expect(result).toEqual(['abc']);
  });

  it('should return an empty array if the input string is empty', () => {
    const result = splitString('');
    expect(result).toEqual([]);
  });

  it('should correctly split a string with consecutive dashes and underscores', () => {
    const result = splitString('a--b__c');
    expect(result).toEqual(['a', '-', '-', 'b', '_', '_', 'c']);
  });

  it('should handle strings that start or end with dashes or underscores', () => {
    const result = splitString('-a_b-');
    expect(result).toEqual(['-', 'a', '_', 'b', '-']);
  });

  it('should handle ampersands', () => {
    const result = splitString('dining-tables-&-chairs');
    expect(result).toEqual(['dining', '-', 'tables', '-', '&', '-', 'chairs']);
  });
});
