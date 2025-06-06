import convertUnits from '@/utils/helpers/convertUnits';

describe('convertUnits', () => {
  it('should convert inches to centimeters', () => {
    expect(convertUnits.inchToCm(10)).toBe(25.4);
  });

  it('should convert centimeters to inches', () => {
    expect(convertUnits.cmToInch(25.4)).toBe(10);
  });
});
