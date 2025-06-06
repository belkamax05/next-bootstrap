import getStringArray from '../getStringArray';
import { PATH_CHARACTER_REGEX } from '../constants';

const formatWithSpaces = (...str) => {
  const stringArray = getStringArray(str) as string[];
  return stringArray.join('').replace(PATH_CHARACTER_REGEX, ' ');
};

export default formatWithSpaces;
