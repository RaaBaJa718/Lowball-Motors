import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import CarGrid from './components/CarGrid';
import Footer from './components/Footer';
import Login from './components/auth/login'; // Import Login component
import Register from './components/auth/register'; // Import Register component
import CarDetails from './components/CarDetails'; // Import CarDetails component
import CarForm from './components/CarForm'; // Import CarForm for sellers
import Offers from './components/offers'; // Import Offers for buyers
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Main landing page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SearchSection />
                <CarGrid />
              </>
            }
          />
          {/* Login page */}
          <Route path="/login" element={<Login />} />
          {/* Register page */}
          <Route path="/register" element={<Register />} />
          {/* Car details page */}
          <Route path="/cars/:id" element={<CarDetails />} />
          {/* Car form for sellers */}
          <Route path="/add-car" element={<CarForm />} />
          {/* Offers page */}
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
