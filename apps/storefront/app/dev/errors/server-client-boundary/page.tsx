import ErrorBoundary from '@/ui/app/ErrorBoundary';
import createPage from '@/ui/app/createPage';

const Component = async () => {
  throw new Error('ErrorMsg');
};

export default createPage(async () => {
  const child = await Component();
  return <ErrorBoundary>{child}</ErrorBoundary>;
});
