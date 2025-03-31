import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-carousel">
        <img src="/icons/car6.jpg" alt="Featured Car 1" className="hero-image" />
        <img src="/icons/car5.jpg" alt="Featured Car 2" className="hero-image" />
        <img src="/icons/car6.jpg" alt="Featured Car 3" className="hero-image" />
      </div>
      <h2 className="hero-text">Find Your Dream Car Today!</h2>
    </section>
  );
}

export default HeroSection;