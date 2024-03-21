import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface LanguagesProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
}

interface LanguageProviderState {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string, list: LanguageList) => string;
}

const initialState: LanguageProviderState = {
  language: 'pt-BR',
  setLanguage: () => null,
  translate: () => '',
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

/**
 * Creates a language provider component that wraps its children with a language context.
 *
 * @param {ReactNode} children - The children to be wrapped by the language provider.
 * @param {string} [defaultLanguage='pt-BR'] - The default language to be used if no language is set.
 * @param {string} [storageKey='atelier-language'] - The key used to store the language in local storage.
 * @return {JSX.Element} The language provider component.
 */
export function LanguageProvider({
  children,
  defaultLanguage = 'pt-BR',
  storageKey = 'atelier-language',
}: LanguagesProviderProps): JSX.Element {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage,
  );

  /**
   * Translate the given key using the provided translation list.
   *
   * @param {string} key - the key to be translated
   * @param {LanguageList} list - the list of translations
   * @return {string} description of return value
   */
  const translate = useCallback(
    (key: string, list: LanguageList): string => {
      if (!language) return list[key]['pt-BR'];

      return list[key][language];
    },
    [language],
  );

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
    },
    translate,
  };

  return <LanguageProviderContext.Provider value={value}>{children}</LanguageProviderContext.Provider>;
}

/**
 * Custom hook for accessing the language context.
 *
 * @return {LanguageProviderState} The language context object
 */
export const useLanguage = (): LanguageProviderState => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
};
