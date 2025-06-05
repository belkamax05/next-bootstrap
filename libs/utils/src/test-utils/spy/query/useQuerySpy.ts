jest.mock('@tanstack/react-query', () => ({
  ...(jest.requireActual('@tanstack/react-query') as jest.Mock),
  useQuery: jest.fn(),
}));

const useQuerySpy = require('@tanstack/react-query').useQuery as jest.Mock;

export default useQuerySpy;
