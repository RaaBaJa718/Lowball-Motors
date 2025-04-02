import React, { useState } from 'react';
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
import Sell from './sell/index';
import New from './components/New';
import ComingSoon from './components/PreOwned';

function App() {
  const [placeholderCars, setPlaceholderCars] = useState([
    { name: 'Car1', year: '2020', mileage: '10,000', price: '$20,000', image: '/icons/car1.jpg' },
    { name: 'Car2', year: '2022', mileage: '5,000', price: '$25,000', image: '/icons/car2.jpg' },
    { name: 'Car3', year: '2021', mileage: '8,000', price: '$22,000', image: '/icons/car3.jpg' },
  ]);

  const handleCarSubmit = (newCar) => {
    setPlaceholderCars((prevCars) => [...prevCars, newCar]);
  };

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
                <HeroSection cars={placeholderCars} />
                <SearchSection />
                <CarGrid />
              </>
            }
          />
          {/* Login page */}
          <Route path="/login" element={<Login />} />
          {/* Register page */}
          <Route path="/sell" element={<Sell onSubmit={handleCarSubmit} />} />
          {/* Car details page */}
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/new" element={<New />} />
          <Route path="/coming" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
