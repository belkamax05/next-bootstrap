import renderQueryHook from '@/utils/test-utils/query/renderQueryHook';
import { QueryClient, QueryKey } from '@tanstack/react-query';
import createState from '.';
import createStateSpy from './index.spy';

describe('createState', () => {
  const mockQueryKey: QueryKey = ['test'];
  const initialData = { foo: 'bar' };
  const changedData = { foo: 'baz' };
  const queryClient = new QueryClient();

  const testState = createState({
    queryKey: mockQueryKey,
    initialData,
  });

  const testStateSpy = createStateSpy(testState);

  beforeEach(() => {
    testState.reset(queryClient);
    jest.clearAllMocks();
  });

  it('should set and get the query data correctly', () => {
    testState.setData(changedData, queryClient);

    expect(testState.getData(queryClient)).toEqual(changedData);
    testState.reset(queryClient);
    expect(testState.getData(queryClient)).toEqual(initialData);
  });

  it('should return the data from the useQuery hook', () => {
    testStateSpy.useData.mockReturnValue(changedData);

    const { result } = renderQueryHook(testState.useData);

    expect(result.current).toEqual(changedData);
  });

  it('should provide basic useClient functionality', () => {
    const {
      result: { current },
    } = renderQueryHook(testState.useClient);

    current.setData({ foo: 'new value' });

    expect(current.getData().foo).toBe('new value');

    current.reset();

    expect(current.getData().foo).toBe(initialData.foo);
  });
});
