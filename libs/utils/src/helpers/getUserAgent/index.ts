import { IS_CLIENT } from '@/utils/constants/app/env';

const getUserAgent = () => {
  if (!IS_CLIENT) return 'Web';

  const userAgent = window?.navigator?.userAgent || window?.navigator?.vendor || window?.opera;

  if (/android/i.test(userAgent)) return 'Android';

  if (/iPad|iPhone|iPod/.test(userAgent) && !window?.MSStream) return 'IOS';

  return 'Web';
};

export default getUserAgent;
