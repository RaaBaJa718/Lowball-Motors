// CarGrid.jsx
import React from 'react';

function CarGrid() {
  return (
    <section className="grid-layout">
      <div className="grid-item">
        <img src="/icons/car1.jpg" alt="Car 4" className="car-image" />
        <h3>2023 Tesla Model 3</h3>
        <p>Long Range</p>
        <p>Mileage: 39,521 miles</p>
        <p className="car-price">$34,998</p>
      </div>
      <div className="grid-item">
        <img src="/icons/car2.jpg" alt="Car 5" className="car-image" />
        <h3>2020 Toyota Camry XSE</h3>
        <p>Technology Package</p>
        <p>Mileage: 22,704 miles</p>
        <p className="car-price">$28,516</p>
      </div>
      <div className="grid-item">
        <img src="/icons/car3.jpg" alt="Car 6" className="car-image" />
        <h3>2018 GMC Acadia</h3>
        <p>Denali</p>
        <p>Mileage: 92,203 miles</p>
        <p className="car-price">$22,948</p>
      </div>
    </section>
  );
}

export default CarGrid;