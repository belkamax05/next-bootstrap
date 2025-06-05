import getHasCamera from '.';
import hasCameraHolder from '../hasCameraHolder';

describe('getHasCamera', () => {
  it('should not fail when no props provided', () => {
    expect(getHasCamera()).toBe(false);
  });

  it('should be supported', () => {
    Object.defineProperty(global.document, 'createElement', {
      configurable: true,
      value: () => ({ capture: true }),
    });
    hasCameraHolder.setValue(true);
    expect(getHasCamera()).toBe(true);
  });
});
