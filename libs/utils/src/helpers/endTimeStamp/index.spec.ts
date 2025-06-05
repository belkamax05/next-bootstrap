import endTimeStamp from '.';

describe('endTimeStamp', () => {
  it('should convert empty string to NaN', () => {
    expect(endTimeStamp('')).toEqual(NaN);
  });

  it('should convert 00/01/1970 to -1', () => {
    expect(endTimeStamp('00/01/1970')).toEqual(-1);
  });

  endTimeStamp('00/01/1970');

  it('should convert 01/01/2023 to ', () => {
    expect(endTimeStamp('01/01/2023')).toEqual(1672617599);
  });
});
