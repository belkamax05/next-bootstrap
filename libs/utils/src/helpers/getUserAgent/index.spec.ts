import getUserAgent from '.';

describe('getUserAgent', () => {
  let windowSpy;
  beforeEach(() => (windowSpy = jest.spyOn(window, 'window', 'get')));

  afterEach(() => windowSpy.mockRestore());

  it('should return android', () => {
    windowSpy.mockReturnValue({
      navigator: {
        userAgent: 'android',
      },
    });
    expect(getUserAgent()).toEqual('Android');
  });

  it('should return android using vendor', () => {
    windowSpy.mockReturnValue({
      navigator: {
        vendor: 'android',
      },
    });
    expect(getUserAgent()).toEqual('Android');
  });

  it('should return android using opera', () => {
    windowSpy.mockReturnValue({
      opera: 'android',
    });
    expect(getUserAgent()).toEqual('Android');
  });

  it('should return IOS', () => {
    windowSpy.mockReturnValue({
      navigator: {
        userAgent: 'iPhone',
      },
    });
    expect(getUserAgent()).toEqual('IOS');
  });

  it('should return IOS using vendor', () => {
    windowSpy.mockReturnValue({
      navigator: {
        vendor: 'iPhone',
      },
    });
    expect(getUserAgent()).toEqual('IOS');
  });

  it('should return IOS using opera', () => {
    windowSpy.mockReturnValue({
      opera: 'iPhone',
    });
    expect(getUserAgent()).toEqual('IOS');
  });

  it('should return Web', () => {
    windowSpy.mockReturnValue({
      navigator: {
        userAgent: 'Chrome',
      },
    });
    expect(getUserAgent()).toEqual('Web');
  });

  it('should return Web when no window', () => {
    windowSpy.mockReturnValue(undefined);
    expect(getUserAgent()).toEqual('Web');
  });

  it('should return Web using vendor', () => {
    windowSpy.mockReturnValue({
      navigator: {
        vendor: 'Chrome',
      },
    });
    expect(getUserAgent()).toEqual('Web');
  });
});
