import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { translations } from './translations'

const STORAGE_KEY = 'mycar-lang'
const LEGAL_PATHS = ['/privacidad', '/terminos']

const LanguageContext = createContext({ lang: 'es', setLang: () => {}, t: translations.es })

export const LanguageProvider = ({ children }) => {
  // Siempre se inicia en 'es' (coincide con el HTML prerenderizado) y luego se aplica la preferencia guardada.
  const [lang, setLangState] = useState('es')
  const { pathname } = useLocation()

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'es') {
        setLangState(saved)
      } else if (navigator.language && navigator.language.toLowerCase().startsWith('en')) {
        setLangState('en')
      }
    } catch {
      // localStorage no disponible: se usa el idioma por defecto
    }
  }, [])

  // Las páginas legales están solo en español, así que el documento se declara 'es' ahí.
  const isLegal = LEGAL_PATHS.some((p) => pathname.startsWith(p))
  useEffect(() => {
    document.documentElement.lang = isLegal ? 'es' : lang
  }, [lang, isLegal])

  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignorar
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
