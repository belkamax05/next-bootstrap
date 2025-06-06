import isHtml from '.';
describe('isHtml', () => {
  it('should reuturn true if it is HTML', () => {
    expect(isHtml('<p>this is html</p>')).toBe(true);
  });

  it('should return false if it is not HTML', () => {
    expect(isHtml('this is not html')).toBe(false);
  });
});
