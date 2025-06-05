import getCurrentPosition from '.';

describe('getCurrentPosition', () => {
  it('should return null if getCurrentPosition is not available', async () => {
    const navigatorBackup = global.navigator;
    global.navigator = {} as never;
    const result = await getCurrentPosition();
    expect(result).toBeNull();
    global.navigator = navigatorBackup;
  });

  it('should return current position if getCurrentPosition is available', async () => {
    const latitude = 35.6895;
    const longitude = 139.6917;
    const expected = { latitude, longitude };
    Object.defineProperty(global.navigator, 'geolocation', {
      writable: true,
      value: {
        getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
          Promise.resolve(
            success({
              coords: { latitude, longitude },
            }),
          ),
        ),
      },
    });
    const result = await getCurrentPosition();
    expect(result).toEqual(expected);
  });
});
