import { IS_CLIENT } from '@/utils/constants/app/env';

export const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#e0e0e0" offset="20%" />
          <stop stop-color="#ffffff" offset="50%" />
          <stop stop-color="#e0e0e0" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#cfcfcf" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

export const toBase64 = (str: string) =>
  !IS_CLIENT ? Buffer.from(str).toString('base64') : window.btoa(str);

const blurSkeletonToNextImage = (width: number, height: number) => {
  return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
};

export default blurSkeletonToNextImage;
