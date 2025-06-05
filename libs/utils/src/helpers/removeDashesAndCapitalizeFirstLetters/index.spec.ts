import removeDashesAndCapitalizeFirstLetters from '.';

describe('removeDashesAndCapitalizeFirstLetters', () => {
  const testDashesStr = 'test-the-string-with-dashes';

  it('given test should return valid string', () => {
    const actualResult = removeDashesAndCapitalizeFirstLetters(testDashesStr);
    expect(actualResult).toEqual('Test The String With Dashes');
  });

  test.each`
    text                                                          | result                                                                   | allDashesFlag
    ${testDashesStr}                                              | ${'Test The String With Dashes'}                                         | ${true}
    ${testDashesStr}                                              | ${'Test The-string-with-dashes'}                                         | ${false}
    ${[testDashesStr, 'test-the-string-with-dashes-second-item']} | ${'Test The String With Dashes Test The String With Dashes Second Item'} | ${true}
    ${undefined}                                                  | ${'Undefined'}                                                           | ${false}
  `('given $text should return valid string: $result', ({ text, result, allDashesFlag }) => {
    const actualResult = removeDashesAndCapitalizeFirstLetters(text, allDashesFlag);
    expect(actualResult).toEqual(result);
  });
});
