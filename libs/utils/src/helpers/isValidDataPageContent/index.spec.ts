import isValidDataPageContent from '.';

describe('isValidDataPageContent', () => {
  it('returns true when pageContent is not undefined and null, and _meta property exists', () => {
    const pageContent = {
      _meta: { id: 1 },
      title: 'Page Title',
      content: 'Page Content',
    };

    expect(isValidDataPageContent(pageContent)).toEqual(true);
  });

  it('returns false when pageContent is undefined', () => {
    expect(isValidDataPageContent(undefined)).toEqual(false);
  });

  it('returns false when pageContent is null', () => {
    expect(isValidDataPageContent(null)).toEqual(false);
  });

  it('returns false when pageContent does not have _meta property', () => {
    const pageContent = {
      title: 'Page Title',
      content: 'Page Content',
    };

    expect(isValidDataPageContent(pageContent)).toEqual(false);
  });
});
