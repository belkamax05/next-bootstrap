import getCircularReplacer from '.';

describe('getCircularReplacer', () => {
  it('getCircularReplacer works as expected', () => {
    const circularObj = { obj: {} };
    circularObj.obj = circularObj;

    const data = {
      a: 1,
      b: 'foo',
      c: null,
      d: false,
      e: [1, 2, 3],
      f: circularObj,
    };

    const replacer = getCircularReplacer();
    const result = JSON.stringify(data, replacer);

    expect(result).toEqual('{"a":1,"b":"foo","c":null,"d":false,"e":[1,2,3],"f":{}}');
  });
});
