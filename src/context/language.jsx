import React, { createContext,useContext, useState } from 'react';
import * as data from '../server/language.json';

const LanguageContext = createContext();

export default function LanguageProvider({children}){

    const [language, setLanguage] = useState(data.pt_br);
    const [languageBool, setLanguageBool] = useState(true);

    return(
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                languageBool,
                setLanguageBool
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(){
    const context = useContext(LanguageContext);
    const {language, setLanguage, languageBool, setLanguageBool} = context;

    languageBool ? setLanguage(data.pt_br) : setLanguage(data.en);
    return {language, languageBool, setLanguageBool};
}
