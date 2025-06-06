import useBasicRouter from '@/utils/next/useBasicRouter';

export type RouterLinkMode = Exclude<
  keyof ReturnType<typeof useBasicRouter>,
  'back' | 'forward' | 'refresh' | 'prefetch'
>;
