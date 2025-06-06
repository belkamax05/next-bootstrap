const historyRouter = {
  pushState: (url: Parameters<typeof window.history.pushState>[2]) =>
    window.history.pushState({}, null, url),
  replaceState: (url: Parameters<typeof window.history.replaceState>[2]) =>
    window.history.replaceState({}, null, url),
};

export default historyRouter;
