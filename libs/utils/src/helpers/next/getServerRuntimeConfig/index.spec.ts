import getServerRuntimeConfig from '.';

describe('getServerRuntimeConfig', () => {
  beforeEach(jest.clearAllMocks);

  it('should match snapshot', () => {
    const value = getServerRuntimeConfig();
    expect(Object.keys(value)).toMatchInlineSnapshot(`
      Array [
        "globalConfig",
      ]
    `);
    expect(Object.keys(value.globalConfig)).toMatchInlineSnapshot(`
      Array [
        "API_URL",
        "NEW_RELIC_RUM_ACCOUNT_ID",
        "NEW_RELIC_RUM_INGEST_KEY",
        "NEW_RELIC_RUM_APPLICATION_ID",
        "NEW_RELIC_RUM_HOST",
        "NEW_RELIC_RUM_TRUST_KEY",
        "CACHE_HEADERS",
      ]
    `);
  });
});
