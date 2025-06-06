const removeSpaces = (str: string) => str.split(/(?=[A-Z])/).join(' ');

export default removeSpaces;
