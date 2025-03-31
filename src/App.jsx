import React from 'react'
import './styles.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SearchSection from './components/SearchSection'
import CarGrid from './components/CarGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SearchSection />
      <CarGrid />
      <Footer />
    </div>
  );
}

export default App;

// Removed duplicate App function and export default statement
