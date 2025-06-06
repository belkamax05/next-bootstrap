/**
 * Works same as "setTimeout" but returns a promise that resolves after the timeout.
 * @param callback - The function to be called after the timeout.
 * @param ms - The time to wait before calling the function.
 * @returns A promise that resolves after the timeout.
 */
const setTimeoutPromise = <TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  ms?: number,
) => new Promise((resolve) => setTimeout((...args: TArgs) => resolve(callback(...args)), ms));

export default setTimeoutPromise;
