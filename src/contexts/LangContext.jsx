import { createContext, useContext, useState } from 'react';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr');
  const toggleLang = () => setLang(l => (l === 'fr' ? 'en' : 'fr'));
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
