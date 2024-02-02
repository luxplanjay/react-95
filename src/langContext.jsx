import { createContext, useState, useContext } from 'react';

export const langContext = createContext();

export const useLang = () => {
  const ctx = useContext(langContext);
  return ctx;
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  return (
    <langContext.Provider
      value={{
        lang,
        changeLang: setLang,
      }}
    >
      {children}
    </langContext.Provider>
  );
};
