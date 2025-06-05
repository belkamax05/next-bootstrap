import formatWithNoSpaces from '.';

describe('formatWithNoSpaces function', () => {
  const textResult = 'helloworldthisisatest';

  it('should replace dashes and underscores with no spaces in a single string', () => {
    const result = formatWithNoSpaces('hello-world_this-is_a-test');
    expect(result).toBe(textResult);
  });

  it('should concatenate multiple strings, replacing dashes and underscores with no spaces', () => {
    const result = formatWithNoSpaces('hello-world', '_this-is', '-a-test');
    expect(result).toBe(textResult);
  });

  it('should return an empty string when no arguments are passed', () => {
    const result = formatWithNoSpaces();
    expect(result).toBe('');
  });

  it('should not alter strings that do not contain dashes or underscores', () => {
    const result = formatWithNoSpaces('hello world', ' this is', ' a test');
    expect(result).toBe('hello world this is a test');
  });

  it('should handle strings with only dashes and underscores', () => {
    const result = formatWithNoSpaces('-_-_-_', '___---');
    expect(result).toBe('');
  });

  it('should correctly handle empty strings in the arguments', () => {
    const result = formatWithNoSpaces('', 'hello-world', '', '_this-is', '', '_a-test', '');
    expect(result).toBe(textResult);
  });
});
