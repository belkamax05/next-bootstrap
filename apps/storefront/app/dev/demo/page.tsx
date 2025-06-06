import { DefaultNextProps } from '@/types';
import DevDemoClientPage from './client';

export default async function DevDemoPage({ params, searchParams }: DefaultNextProps) {
  return (
    <div>
      <h1>Demo Page</h1>
      <h3>Server side:</h3>
      <p>Post anything you like to be here for temporary testing</p>
      <DevDemoClientPage />
    </div>
  );
}
