jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useParams: jest.fn(),
  useSearchParams: jest.fn(),
}));

export const {
  useRouter: useRouterSpy,
  usePathname: usePathnameSpy,
  useParams: useParamsSpy,
  useSearchParams: useSearchParamsSpy,
} = require('next/navigation');
