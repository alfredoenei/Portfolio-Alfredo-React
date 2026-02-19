import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('es'); // Default to Spanish

    // Optional: Load from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
            setLanguage(savedLanguage);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'es' ? 'en' : 'es';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    // Translation helper function
    // Usage: t('nav.projects') -> "Proyectos" or "Projects"
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                if (import.meta.env.DEV) {
                    console.warn(`Translation missing for key: ${key} in language: ${language}`);
                }
                return key; // Fallback to key if not found
            }
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
