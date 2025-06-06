import naturalSort from '.';

describe('naturalSort', () => {
  it('should sort an array of strings with numeric values correctly', () => {
    const input = ['item10', 'item2', 'item1'];
    const expectedOutput = ['item1', 'item2', 'item10'];

    expect(naturalSort(input)).toEqual(expectedOutput);
  });

  it('should sort an array of strings with mixed case correctly', () => {
    const input = ['Banana', 'apple', 'Cherry'];
    const expectedOutput = ['apple', 'Banana', 'Cherry'];

    expect(naturalSort(input)).toEqual(expectedOutput);
  });

  it('should handle an empty array correctly', () => {
    const input: string[] = [];
    const expectedOutput: string[] = [];

    expect(naturalSort(input)).toEqual(expectedOutput);
  });

  it('should handle an array with identical strings correctly', () => {
    const input = ['same', 'same', 'same'];
    const expectedOutput = ['same', 'same', 'same'];

    expect(naturalSort(input)).toEqual(expectedOutput);
  });

  it('should not be changing original value', () => {
    const input = ['item10', 'item2', 'item1'];
    const expectedOutput = ['item1', 'item2', 'item10'];

    const result = naturalSort(input);

    expect(result.join()).toEqual(expectedOutput.join());
    expect(result === input).toBeFalsy();
  });
});
