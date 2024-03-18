/**
 * Initializes the user's language based on the value stored in the local storage.
 *
 * @return {void}
 */
export function initUserLanguage(): void {
  const language: string | null = localStorage.getItem("user-language");

  if (language) return;

  localStorage.setItem("user-language", "pt-br");
}

/**
 * Translate the given key using the provided translation list.
 *
 * @param {string} key - the key to be translated
 * @param {TranslationList} list - the list of translations
 * @return {string} description of return value
 */
export function translate(key: string, list: TranslationList): string {
  const language: string | null = localStorage.getItem("user-language");

  if (!language) return list[key]["pt-br"];

  return list[key][language];
}
