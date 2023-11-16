/**
 * Parses a string representing an array with single quotes into a JavaScript array.
 *
 * @param {string} arrayString - The string representation of an array with single quotes.
 * @returns {Object} - An object with 'result' property containing the parsed JavaScript array
 *                     and 'error' property containing an error message if any.
 *
 * @example
 * const technologiesString: string = "['js', 'python']";
 * const result = parseArrayString(technologiesString);
 */
export function parseArrayString(arrayString: string) {
  const validJSONString = arrayString.replace(/'/g, '"');
  const parsedArray = JSON.parse(validJSONString);
  return parsedArray;
}
