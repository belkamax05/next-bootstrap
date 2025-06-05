// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidDataPageContent = (pageContent: any): boolean => {
  if (typeof pageContent !== 'undefined' && pageContent !== null) {
    return !!Object?.getOwnPropertyDescriptor(pageContent, '_meta');
  }
  return false;
};

export default isValidDataPageContent;
