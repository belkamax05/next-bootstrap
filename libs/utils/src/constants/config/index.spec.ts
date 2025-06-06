import axiosConfig from './axiosConfig';
import departmentContentRoutes from './departmentContentRoutes';
import queryClientConfig from './queryClientConfig';

describe('config', () => {
  it('should import axiosConfig', () => {
    expect(axiosConfig).toMatchInlineSnapshot(`
      Object {
        "headers": Object {
          "Content-Type": "application/json",
        },
        "timeout": 30000,
      }
    `);
  });

  it('should import queryClientConfig', () => {
    expect(queryClientConfig).toMatchInlineSnapshot(`
      Object {
        "defaultOptions": Object {
          "dehydrate": Object {
            "shouldDehydrateQuery": [Function],
          },
          "queries": Object {
            "gcTime": Infinity,
            "refetchOnWindowFocus": false,
            "retry": false,
            "retryOnMount": false,
            "staleTime": Infinity,
          },
        },
      }
    `);
  });

  it('should import departmentContentRoutes', () => {
    expect(departmentContentRoutes).toMatchInlineSnapshot(`
      Array [
        "inspiration",
        "brands",
        "info",
        "category",
        "buying-guide",
        "sleephub",
        "help",
        "expert",
      ]
    `);
  });
});
