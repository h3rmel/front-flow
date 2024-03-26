'use client';

import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

// #region Interfaces

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

// #endregion

const initialState: LanguageProviderState = {
  language: 'pt-BR',
  setLanguage: () => null,
  translate: () => '',
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

/**
 * Provides language context to its children components.
 *
 * @param {ReactNode} children - The children components.
 * @param {Language} [defaultLanguage='pt-BR'] - The default language.
 * @param {string} [storageKey='atelier-language'] - The key used to store the language in local storage.
 * @returns {JSX.Element} The language provider component.
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
   * @param {string} key - The key to be translated.
   * @param {LanguageList} list - The list of translations.
   * @returns {string} The translated value.
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
 * Custom hook that provides the language state from the LanguageProvider context.
 * Throws an error if used outside of a LanguageProvider.
 *
 * @returns {LanguageProviderState} The language state from the LanguageProvider context.
 * @throws {Error} If used outside of a LanguageProvider.
 */
export const useLanguage = (): LanguageProviderState => {
  const context = useContext(LanguageProviderContext);

  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
};
