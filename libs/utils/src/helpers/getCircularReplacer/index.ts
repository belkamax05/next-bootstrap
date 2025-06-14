/**
 * used as JSON.stringify param to prevent circular references
 * @example
 * const sample = JSON.stringify(data, getCircularReplacer());
 */
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export default getCircularReplacer;
