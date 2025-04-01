import React, { useState, useEffect } from 'react';

function HeroSection({ cars }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [cars.length]);

  return (
    <section className="hero-section">
      <div className="hero-carousel">
        {cars.map((car, index) => (
          <img
            key={index}
            src={car.image}
            alt={`Featured Car ${index + 1}`}
            className={`hero-image ${index === currentImageIndex ? 'active' : 'inactive'}`}
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
      <h2 className="hero-text">Find Your Dream Car Today!</h2>
    </section>
  );
}

export default HeroSection;
