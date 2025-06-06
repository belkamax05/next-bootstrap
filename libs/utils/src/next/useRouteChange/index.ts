'use client';
import { AnyFunction } from '@/types';
import routerChangeState from '@/utils/state/app/routerChangeState';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export type UseRouteChangeEventTypes = 'mount' | 'change';

export interface UseRouteChangeOptions {
  /** unique key per use-case tracking, helps to identify, if "onChange" already been processed for current route */
  origin: string;
  /** which events to include, could be ["mount", "change"] subset or leave empty for all */
  events?: UseRouteChangeEventTypes[];
}

const useRouteChange = (onChange: AnyFunction, { origin, events }: UseRouteChangeOptions) => {
  const pathname = usePathname();
  const queryClient = useQueryClient();

  useEffect(() => {
    const current = routerChangeState.getData(queryClient)?.[origin];
    const eventType: UseRouteChangeEventTypes = !current ? 'mount' : 'change';
    if (current !== pathname) {
      const eventAllowed = !events ? true : events.includes(eventType);
      if (eventAllowed) onChange();
      routerChangeState.appendData({ [origin]: pathname }, queryClient);
    }
  }, [onChange, queryClient, origin, pathname, events]);
};

export default useRouteChange;
