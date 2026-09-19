import { createContext, useContext, useState } from 'react';
import { translations } from '../lib/i18n';

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // fallback
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className={lang === 'mr' ? 'font-marathi tracking-wide' : 'font-inter'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
