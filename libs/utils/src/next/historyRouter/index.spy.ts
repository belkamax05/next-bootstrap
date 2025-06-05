import noop from '@/utils/helpers/noop';
import historyRouter from '.';

const historyRouterSpy = {
  pushState: jest.spyOn(historyRouter, 'pushState').mockImplementation(noop),
  replaceState: jest.spyOn(historyRouter, 'replaceState').mockImplementation(noop),
};

export default historyRouterSpy;
