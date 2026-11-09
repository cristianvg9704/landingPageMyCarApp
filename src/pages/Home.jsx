import Hero from '../components/Hero'
import ProductInfo from '../components/ProductInfo'
import UserTypes from '../components/UserTypes'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'
import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function Home() {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = t.docTitle
  }, [t])

  return (
    <>
      <Hero />
      <ProductInfo />
      <UserTypes />
      <Features />
      <Newsletter />
    </>
  )
}

export default Home
