import setTimeoutPromise from '.';

describe('setTimeoutPromise', () => {
  it('should resolve with the result of the callback after the specified delay', async () => {
    const callback = jest.fn().mockResolvedValue('test result');
    const promise = setTimeoutPromise(callback, 100);

    expect(callback).not.toHaveBeenCalled();
    await expect(promise).resolves.toBe('test result');
    expect(callback).toHaveBeenCalled();
  });

  it('should resolve immediately if no delay is specified', async () => {
    const callback = jest.fn().mockResolvedValue('test result');
    const promise = setTimeoutPromise(callback);

    expect(callback).not.toHaveBeenCalled();
    await expect(promise).resolves.toBe('test result');
    expect(callback).toHaveBeenCalled();
  });

  it('should pass the arguments to the callback', async () => {
    const callback = jest.fn().mockResolvedValue('test result');
    const args = [1, 'test', { key: 'value' }];
    const promise = setTimeoutPromise(() => callback(...args), 100);

    expect(callback).not.toHaveBeenCalled();
    await expect(promise).resolves.toBe('test result');
    expect(callback).toHaveBeenCalledWith(...args);
  });
});
