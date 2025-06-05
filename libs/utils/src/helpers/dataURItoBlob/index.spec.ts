import dataURItoBlob from '.';

const onePixelB64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==';

describe('dataURItoBlob', () => {
  it('should return correct blob from base64 data', () => {
    const result = dataURItoBlob(onePixelB64);
    expect(typeof result).toBe('object');
    expect(result.type).toBe('image/png');
    expect(result.size).toBe(70);
  });
});
