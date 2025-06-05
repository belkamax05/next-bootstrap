import removeArrayDuplicates from '.';

describe('removeArrayDuplicates', () => {
  it('should remove duplicate numbers from an array', () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(removeArrayDuplicates(input)).toEqual(expectedOutput);
  });

  it('should remove duplicate strings from an array', () => {
    const input = ['a', 'b', 'b', 'c', 'a'];
    const expectedOutput = ['a', 'b', 'c'];
    expect(removeArrayDuplicates(input)).toEqual(expectedOutput);
  });

  it('should handle an array with no duplicates', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(removeArrayDuplicates(input)).toEqual(expectedOutput);
  });

  it('should handle an empty array', () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(removeArrayDuplicates(input)).toEqual(expectedOutput);
  });

  it('should handle an array with a single element', () => {
    const input = [42];
    const expectedOutput = [42];
    expect(removeArrayDuplicates(input)).toEqual(expectedOutput);
  });

  it('should handle an array with mixed types', () => {
    const input = [1, '1', 2, '2', 1];
    const expectedOutput = [1, '1', 2, '2'];
    expect(removeArrayDuplicates(input)).toEqual(expectedOutput);
  });

  it('should preserve the order of the first occurrence of each element', () => {
    const input = [3, 1, 2, 3, 1, 4];
    const expectedOutput = [3, 1, 2, 4];
    expect(removeArrayDuplicates(input)).toEqual(expectedOutput);
  });
});
