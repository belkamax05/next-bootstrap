import renderQueryHook from '@/utils/test-utils/query/renderQueryHook';
import { usePathnameSpy } from '@/utils/test-utils/spy/next/navigation';
import { act } from '@testing-library/react';
import useRouteChange from '.';

describe('useRouteChange', () => {
  it('should call onChange when pathname changes', () => {
    const onChange = jest.fn();
    const { rerender } = renderQueryHook(() => useRouteChange(onChange, { origin: 'test-origin' }));

    expect(onChange).not.toHaveBeenCalled();

    act(() => {
      usePathnameSpy.mockReturnValue('/new-path');
      rerender();
    });

    expect(onChange).toHaveBeenCalled();
  });
});
