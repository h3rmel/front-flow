/**
 * Retrieves the form error message for a specific key from a IFormError array.
 *
 * @param {IFormError[]} errors - The IFormError array containing the form errors.
 * @param {string} key - The key to search for in the form errors.
 * @returns {IFormError | undefined} The form error message as an IFormError object, or undefined if not found.
 */
export function getFormError(errors: IFormError[], key: string): IFormError | undefined {
  if (errors.length === 0) return;

  const error = errors.find((error) => error.path === key);

  if (!error) return;

  return error;
}
