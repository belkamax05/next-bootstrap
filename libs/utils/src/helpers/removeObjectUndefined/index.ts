const removeObjectUndefined = <TObj>(obj: TObj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'undefined') delete obj[key];
  });
  return obj;
};

export default removeObjectUndefined;
