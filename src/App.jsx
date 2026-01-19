import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProductInfo from './components/ProductInfo'
import UserTypes from './components/UserTypes'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <Hero />
      <ProductInfo />
      <UserTypes />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
