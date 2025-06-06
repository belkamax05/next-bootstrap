import axios from '.';

describe('axios', () => {
  it('headers should be set to application/json', () => {
    expect(axios.defaults.headers['Content-Type']).toBe('application/json');
  });
  it('timeout should be set to the default value (30 seconds)', () => {
    expect(axios.defaults.timeout).toBe(30000);
  });
});
