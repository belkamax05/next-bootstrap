import noop from '@/utils/helpers/noop';
import historyRouter from '.';

describe('historyRouter', () => {
  beforeEach(() => {
    jest.spyOn(global.history, 'pushState').mockImplementation(noop);
    jest.spyOn(global.history, 'replaceState').mockImplementation(noop);
  });

  afterEach(() => jest.clearAllMocks());

  it('should call history.pushState with the correct arguments', () => {
    const url = 'https://example.com';
    historyRouter.pushState(url);
    expect(global.history.pushState).toHaveBeenCalledWith({}, null, url);
  });

  it('should call history.replaceState with the correct arguments', () => {
    const url = 'https://example.com';
    historyRouter.replaceState(url);
    expect(global.history.replaceState).toHaveBeenCalledWith({}, null, url);
  });
});
