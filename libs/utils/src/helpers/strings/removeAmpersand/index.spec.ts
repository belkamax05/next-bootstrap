import removeAmpersand from '.';

describe('removeAmpersand function', () => {
  it('should remove all ampersands from a single string', () => {
    const result = removeAmpersand('Zinc&');
    expect(result).toBe('Zinc');
  });

  it('should remove all ampersands from each string in an array and concatenate them', () => {
    const result = removeAmpersand(['S&and', 'w&ich&']);
    expect(result).toBe('Sandwich');
  });

  it('should return the original string if there are no ampersands', () => {
    const result = removeAmpersand('Zinc');
    expect(result).toBe('Zinc');
  });

  it('should return an empty string if the input is an empty string', () => {
    const result = removeAmpersand('');
    expect(result).toBe('');
  });

  it('should return an empty string if the input is an array of empty strings', () => {
    const result = removeAmpersand(['', '']);
    expect(result).toBe('');
  });

  it('should handle strings with only ampersands', () => {
    const result = removeAmpersand('&&&&');
    expect(result).toBe('');
  });

  it('should handle arrays with strings that only contain ampersands', () => {
    const result = removeAmpersand(['&', '&&', '&&&']);
    expect(result).toBe('');
  });

  it('should maintain character case', () => {
    const result = removeAmpersand('AllFabric&Sofas');
    expect(result).toBe('AllFabricSofas');
  });
});
