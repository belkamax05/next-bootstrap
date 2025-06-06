import * as index from '.';

describe('types', () => {
  it('should be having minimal size as holds types only', () => {
    expect(JSON.stringify(index)).toMatchInlineSnapshot(`"{\\"__esModule\\":true}"`);
    expect(JSON.stringify(Object.keys(index))).toMatchInlineSnapshot(`"[\\"__esModule\\"]"`);
  });
});
