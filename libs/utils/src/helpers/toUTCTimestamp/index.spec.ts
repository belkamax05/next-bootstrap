import toUTCTimestamp from '.';

describe('toUTCTimestamp', () => {
  it('should convert a date without a time to a UTC Ttimestamp', () => {
    expect(toUTCTimestamp(2022, 11, 15)).toEqual(1668470400);
  });

  it('should convert a date and time to a UTC Ttimestamp', () => {
    expect(toUTCTimestamp(2022, 11, 15, 17, 45, 23)).toEqual(1668534323);
  });
});
