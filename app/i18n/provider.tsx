'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { Locale, defaultLocale, getDeviceLocale, locales } from './config';

type Translations = Record<string, any>;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'preferred-language';

// Cache for loaded translations
const translationsCache: Partial<Record<Locale, Translations>> = {};

async function loadTranslations(locale: Locale): Promise<Translations> {
  // Return from cache if available
  if (translationsCache[locale]) {
    return translationsCache[locale]!;
  }

  const translations = await import(`./locales/${locale}.json`);
  translationsCache[locale] = translations.default;
  return translations.default;
}

// Preload all translations
async function preloadAllTranslations() {
  await Promise.all(locales.map(locale => loadTranslations(locale)));
}

function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Determine initial locale: saved preference > device language > default
    const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
    const initialLocale = savedLocale || getDeviceLocale();

    // Load initial translations and preload others in background
    loadTranslations(initialLocale).then((trans) => {
      setLocaleState(initialLocale);
      setTranslations(trans);
      setIsLoading(false);

      // Preload other translations in background for instant switching
      preloadAllTranslations();
    });
  }, []);

  const setLocale = useCallback(async (newLocale: Locale) => {
    localStorage.setItem(STORAGE_KEY, newLocale);

    // Load new translations (will be instant if cached)
    const trans = await loadTranslations(newLocale);

    // Update state atomically - translations and locale together
    setTranslations(trans);
    setLocaleState(newLocale);

    // Update HTML lang attribute
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    // During initial load, return empty string to avoid flashing keys
    if (isLoading) {
      return '';
    }

    let value = getNestedValue(translations, key);

    if (value === undefined) {
      // Suppress console warnings in production
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Translation missing for key: ${key}`);
      }
      return '';
    }

    // Replace parameters like {name} with actual values
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        value = value!.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramValue));
      });
    }

    return value;
  }, [translations, isLoading]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export function useTranslation() {
  const { t, locale, isLoading } = useI18n();
  return { t, locale, isLoading };
}
