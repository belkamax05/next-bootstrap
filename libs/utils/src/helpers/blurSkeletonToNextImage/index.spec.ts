import blurSkeletonToNextImage, { shimmer, toBase64 } from '.';

describe('blurSkeletonToNextImage', () => {
  it('should return the svg to add on blur skeleton to next image as expected ', () => {
    const width = 206;
    const height = 106;
    const svgSkeleton = shimmer(width, height);
    expect(shimmer(width, height)).toEqual(svgSkeleton);
  });

  it('should return the svg in base64 to add the blur skeleton to next image', () => {
    const width = 206;
    const height = 106;
    const base64Image = toBase64(shimmer(width, height));
    expect(toBase64(shimmer(width, height))).toEqual(base64Image);
  });

  it('should return the blur skeleton to next image', () => {
    const width = 206;
    const height = 106;
    const base64Image = toBase64(shimmer(width, height));
    expect(blurSkeletonToNextImage(206, 106)).toEqual(`data:image/svg+xml;base64,${base64Image}`);
  });
});
