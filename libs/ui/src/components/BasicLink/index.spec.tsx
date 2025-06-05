import useBasicRouterSpy from '@/utils/next/useBasicRouter/index.spy';
import { fireEvent, render } from '@testing-library/react';
import BasicLink from '.';

const push = jest.fn();
const replace = jest.fn();
const pushState = jest.fn();
const replaceState = jest.fn();

describe('BasicLink', () => {
  beforeEach(() =>
    useBasicRouterSpy.mock({
      push,
      replace,
      pushState,
      replaceState,
    }),
  );
  afterEach(() => jest.clearAllMocks());

  it('renders a next/link by default', () => {
    const { getByText } = render(<BasicLink href="/foo">Go</BasicLink>);
    const link = getByText('Go');

    expect(link).toBeInTheDocument();

    fireEvent.click(link);

    expect(push).not.toHaveBeenCalled();
    expect(replace).not.toHaveBeenCalled();
    expect(pushState).not.toHaveBeenCalled();
    expect(replaceState).not.toHaveBeenCalled();
  });

  it('calls router.push when mode is "push"', () => {
    const { getByText } = render(
      <BasicLink href="/foo" mode="push">
        Push
      </BasicLink>,
    );
    const link = getByText('Push');
    fireEvent.click(link);

    expect(push).toHaveBeenCalledWith('/foo');
  });

  it('calls router.replace when mode is "replace"', () => {
    const { getByText } = render(
      <BasicLink href="/bar" mode="replace">
        Replace
      </BasicLink>,
    );
    const link = getByText('Replace');
    fireEvent.click(link);

    expect(replace).toHaveBeenCalledWith('/bar');
  });

  it('calls router.pushState when mode is "pushState"', () => {
    const { getByText } = render(
      <BasicLink href="/baz" mode="pushState">
        PushState
      </BasicLink>,
    );
    const link = getByText('PushState');
    fireEvent.click(link);

    expect(pushState).toHaveBeenCalledWith('/baz');
  });

  it('calls router.replaceState when mode is "replaceState"', () => {
    const { getByText } = render(
      <BasicLink href="/qux" mode="replaceState">
        ReplaceState
      </BasicLink>,
    );
    const link = getByText('ReplaceState');
    fireEvent.click(link);

    expect(replaceState).toHaveBeenCalledWith('/qux');
  });

  it('passes prefetch prop correctly', () => {
    const { getByText, rerender } = render(
      <BasicLink href="/foo" prefetch>
        Prefetch
      </BasicLink>,
    );
    expect(getByText('Prefetch')).toBeInTheDocument();

    rerender(
      <BasicLink href="/foo" prefetch={false}>
        NoPrefetch
      </BasicLink>,
    );

    expect(getByText('NoPrefetch')).toBeInTheDocument();
  });
});
