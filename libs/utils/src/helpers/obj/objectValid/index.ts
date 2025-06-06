/**
 * checks if obj is a valid object (valid is '{}' and '{a: 1}' but not '[]' and 'null')
 * @param obj
 * @returns {boolean} true if obj is a valid object, false otherwise
 */
const objectValid = (obj) => typeof obj === 'object' && obj !== null && !Array.isArray(obj);

export default objectValid;
