/**
 * Checks if `value` is a string.
 * @private
 * @param {*} value The value to check.
 * @return {boolean} `true` if `value` is a string, else `false`.
 */
function isString(value: any): value is string {
  return (typeof value === 'string' || value instanceof String);
}

export {
  isString
};
