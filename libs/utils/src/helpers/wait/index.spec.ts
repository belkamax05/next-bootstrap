import wait from '.';

const treshold = 5;

describe('wait', () => {
  test('waits for 100ms', async () => {
    const start = Date.now();
    await wait(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100 - treshold);
  });
  test('waits for 500ms', async () => {
    const start = Date.now();
    await wait(500);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(500 - treshold);
  });
});
