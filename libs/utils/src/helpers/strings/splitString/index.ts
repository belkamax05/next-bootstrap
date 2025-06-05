import { PATH_CHARACTER_REGEX } from '../constants';

const splitString = (str) => {
  const filtered = [].concat(str.split(PATH_CHARACTER_REGEX)).filter((e) => {
    return e;
  });
  return filtered;
};

export default splitString;
