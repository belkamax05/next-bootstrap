import { useQueryClient } from '@tanstack/react-query';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query').default,
  useQueryClient: jest.fn(),
}));

const useQueryClientSpy = useQueryClient as jest.Mock;

export default useQueryClientSpy;
