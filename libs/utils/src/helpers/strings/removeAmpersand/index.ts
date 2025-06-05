import getStringArray from '../getStringArray';

const removeAmpersand = (str: string | string[]) => {
  if (Array.isArray(str)) {
    const stringArray = getStringArray(str) as string[];
    return stringArray.join('').replace(/&/g, '');
  }
  const rawString = getStringArray(str) as string;
  return rawString.replace(/&/g, '');
};

export default removeAmpersand;
