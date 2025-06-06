import {
  compose,
  composeCapitaliseFirstWithSpaces,
  composeCapitaliseFirstNoSpacesSplit,
  composeCapitaliseFirstWithSpacesSplit,
} from '.';

describe('compose', () => {
  it('should compose with multiple args', () => {
    const g = (x, y) => x + y;
    const f = (n) => n * 2;

    expect(compose(f, g)(19, 2)).toBe(42);
  });

  it('should compose with single arg', () => {
    const add5 = (n) => 5 + n;
    const multiply3 = (n) => 3 * n;
    expect(compose(multiply3, add5)(2)).toBe(21);
  });

  it.each([
    { input: 'beds-and-mattresses', expected: 'BedsAndMattresses' },
    { input: 'beds_and_mattresses', expected: 'BedsAndMattresses' },
    { input: 'beds', expected: 'Beds' },
    { input: '', expected: '' },
    { input: 'with-numbers-2-test', expected: 'WithNumbers2Test' },
    { input: '123-start-with-numbers', expected: '123StartWithNumbers' },
  ])('should convert $input to $expected capitalised with no spaces', ({ input, expected }) => {
    const result = composeCapitaliseFirstNoSpacesSplit(input);
    expect(result).toBe(expected);
  });

  it.each([
    { input: 'beds-and-mattresses', expected: 'Beds And Mattresses' },
    { input: 'beds_and_mattresses', expected: 'Beds And Mattresses' },
    { input: 'beds', expected: 'Beds' },
    { input: '', expected: '' },
    { input: 'with-numbers-2-test', expected: 'With Numbers 2 Test' },
    { input: '123-start-with-numbers', expected: '123 Start With Numbers' },
    { input: 'dining-tables-&-chairs', expected: 'Dining Tables & Chairs' },
  ])('should convert $input to $expected capitalised with spaces ', ({ input, expected }) => {
    const result = composeCapitaliseFirstWithSpacesSplit(input);
    expect(result).toBe(expected);
  });

  it.each([
    { input: 'beds-and-mattresses', expected: 'Beds and mattresses' },
    { input: 'beds_and_mattresses', expected: 'Beds and mattresses' },
    { input: 'beds', expected: 'Beds' },
    { input: '', expected: '' },
    { input: 'with-numbers-2-test', expected: 'With numbers 2 test' },
    { input: '123-start-with-numbers', expected: '123 start with numbers' },
  ])(
    'should convert $input to $expected with first letter capitalised and spaces',
    ({ input, expected }) => {
      const result = composeCapitaliseFirstWithSpaces(input);
      expect(result).toBe(expected);
    },
  );
});
