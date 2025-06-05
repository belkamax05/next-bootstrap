import { QueryClient } from '@tanstack/react-query';
import { NextApiRequest, NextPageContext } from 'next';

export interface PageContext extends Omit<NextPageContext, 'req'> {
  queryClient: QueryClient;
  req: NextApiRequest;
}
