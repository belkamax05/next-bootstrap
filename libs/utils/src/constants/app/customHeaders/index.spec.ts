import customHeaders from '.';

describe('should correctly import constants', () => {
  it('should have correct customHeaders', () => {
    expect(customHeaders).toMatchSnapshot();
  });
});
