import formatWithSpaces from '.';

describe('formatWithSpaces function', () => {
  it('should replace dashes and underscores with spaces in a single string', () => {
    const result = formatWithSpaces('hello-world_this-is_a-test');
    expect(result).toBe('hello world this is a test');
  });

  it('should concatenate multiple strings, replacing dashes and underscores with spaces', () => {
    const result = formatWithSpaces('hello-world', '_this-is', '-a-test');
    expect(result).toBe('hello world this is a test');
  });

  it('should return an empty string when no arguments are passed', () => {
    const result = formatWithSpaces();
    expect(result).toBe('');
  });

  it('should not alter strings that do not contain dashes or underscores', () => {
    const result = formatWithSpaces('hello world', ' this is', ' a test');
    expect(result).toBe('hello world this is a test');
  });

  it('should handle strings with only dashes and underscores', () => {
    const result = formatWithSpaces('-_-_-_', '___---');
    expect(result).toBe('            ');
  });

  it('should correctly handle empty strings in the arguments', () => {
    const result = formatWithSpaces('', 'hello-world', '', '_this-is', '', '_a-test', '');
    expect(result).toBe('hello world this is a test');
  });
});
