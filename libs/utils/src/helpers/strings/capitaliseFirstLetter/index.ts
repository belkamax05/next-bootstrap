import getStringArray from '../getStringArray';

const capitaliseFirstLetter = (...str) => {
  const stringArray = getStringArray(str) as string[];
  return stringArray.map((s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`);
};

export default capitaliseFirstLetter;
