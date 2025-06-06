import hasCameraHolder from '.';

describe('hasCameraHolder', () => {
  it('should not fail when no props provided', () => {
    expect(hasCameraHolder.getValue()).toBe(false);
  });
});
