const INCH_TO_CM = 2.54;

const convertUnits = {
  inchToCm: (inch: number) => inch * INCH_TO_CM,
  cmToInch: (cm: number) => cm / INCH_TO_CM,
};

export default convertUnits;
