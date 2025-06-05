const getStringArray = (str: string | string[] | string[][]) => {
  return Array.isArray(str[0]) ? (str[0] as string[]) : (str as string | string[][]);
};

export default getStringArray;
