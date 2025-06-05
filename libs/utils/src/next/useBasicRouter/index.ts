import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import historyRouter from '../historyRouter';

export type BasicRouterInstance = AppRouterInstance & typeof historyRouter;

/**
 * Mirror for `next/navigation`'s `useRouter` hook.
 */
const useBasicRouter = (): BasicRouterInstance => {
  const router = useRouter();

  return {
    ...router,
    ...historyRouter,
  };
};

export default useBasicRouter;
