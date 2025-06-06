import { AnyFunction, DeepPartial, PageContext } from '@/types';

const getInitialPropsTest = (
  func: AnyFunction,
  ctx?: DeepPartial<PageContext>,
  ...rest: unknown[]
) => {
  it('should not fail without props', async () => {
    const result = await func(ctx, ...rest);

    expect(result).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
};

export default getInitialPropsTest;
