import requestCameraAccess, { cameraAccessFunctions } from '.';

describe('requestCameraAccess', () => {
  const functions: cameraAccessFunctions = {
    permitted: jest.fn(),
    denied: jest.fn(),
  };
  const mockSuccessGetUserMedia = jest.fn(async () => {
    return new Promise<void>((resolve) => {
      resolve();
    });
  });
  const mockFailGetUserMedia = jest.fn(async () => {
    return new Promise<void>((_resolve, reject) => {
      reject();
    });
  });

  it('should not fail when no props provided', () => {
    expect(requestCameraAccess(null)).toBeUndefined();
  });

  it('should be supported', () => {
    Object.defineProperty(global.navigator, 'mediaDevices', {
      configurable: true,
      value: {
        getUserMedia: mockSuccessGetUserMedia,
      },
    });
    expect(requestCameraAccess(functions)).toBeUndefined();
  });

  it('should not be supported', () => {
    Object.defineProperty(global.navigator, 'mediaDevices', {
      configurable: true,
      value: {
        getUserMedia: mockFailGetUserMedia,
      },
    });
    expect(requestCameraAccess(functions)).toBeUndefined();
  });
});
