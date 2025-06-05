import startcase from 'lodash.startcase';

const nonEmptyStartcase = <TValue extends number | string>(value: TValue): TValue | string => {
  if (typeof value === 'undefined' || value == null) return value;
  return startcase(`${value}`);
};

export default nonEmptyStartcase;
