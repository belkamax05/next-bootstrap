const removeDashesAndCapitalizeFirstLetters = (
  text: string | string[],
  replaceAllDashes = true,
): string => {
  // regex to get the first letter of the range
  const regex = /(^\w{1})|(\s+\w{1})/g;
  const modifiedText = Array.isArray(text) ? text.join(' ') : text;
  const withNoDashes = String(modifiedText).replace(replaceAllDashes ? /-/g : '-', ' ');

  return withNoDashes.replace(regex, (letter) => letter.toUpperCase());
};

export default removeDashesAndCapitalizeFirstLetters;
