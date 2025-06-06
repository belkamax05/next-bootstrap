import * as envConsts from '@/utils/constants/app/env';

const envConstsTest = {
  setIsClient: (value: boolean) =>
    Object.defineProperty(envConsts, 'IS_CLIENT', { value: value, writable: true }),
  setEnvDev: (value: boolean) =>
    Object.defineProperty(envConsts, 'ENV_DEV', { value: value, writable: true }),
  setEnvTest: (value: boolean) =>
    Object.defineProperty(envConsts, 'ENV_TEST', { value: value, writable: true }),
  setEnvDevOverrides: (value: boolean) =>
    Object.defineProperty(envConsts, 'IS_DEV_OVERRIDES', { value: value, writable: true }),
};

export default envConstsTest;
