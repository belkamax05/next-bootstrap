export const isHtml = (str: string): boolean => /<\/?[^>]*>/.test(str);

export default isHtml;
