import { IS_CLIENT } from '@/utils/constants/app/env';

export type ServerClientAllow = 'server' | 'client' | boolean;

const checkAllowServerClient = (allow: ServerClientAllow) => {
  if (allow) {
    if (allow === true) return true;
    else if (allow === 'client') return IS_CLIENT;
    else if (allow === 'server') return !IS_CLIENT;
  }
  return false;
};

export default checkAllowServerClient;
