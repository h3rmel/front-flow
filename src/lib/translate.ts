// TODO: Create a way of using it in the app.

/**
 * Translates a given key into the corresponding language from the provided list.
 * If the language is not set, it defaults to 'pt-BR'.
 *
 * @param {string} key - The key to be translated.
 * @param {LanguageList} list - The language list containing the translations.
 * @returns {string} The translated string.
 */
export function translate(key: string, list: LanguageList): string {
  const language = localStorage.getItem('atelier-language') as Language;

  if (!language) return list[key]['pt-BR'];

  return list[key][language];
}
