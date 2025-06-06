const formatPlural = (value: number | string) => {
  const num = Number(value);
  return num === 1 ? 'singular' : num > 1 ? 'plural' : 'error';
};
export default formatPlural;
