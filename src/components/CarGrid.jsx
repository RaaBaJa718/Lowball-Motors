import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation to CarDetails

function CarGrid() {
  const navigate = useNavigate();

  const placeholderCars = [
    { id: 1, name: "2023 Tesla Model 3", details: "Long Range - Mileage: 39,521 miles", price: "$34,998", image: "/icons/car1.jpg" },
    { id: 2, name: "2020 Toyota Camry XSE", details: "Technology Package - Mileage: 22,704 miles", price: "$28,516", image: "/icons/car2.jpg" },
    { id: 3, name: "2018 GMC Acadia", details: "Denali - Mileage: 92,203 miles", price: "$22,948", image: "/icons/car3.jpg" },
    { id: 7, name: "2021 Toyota RAV4", details: "Hybrid XLE - Mileage: 15,903 miles", price: "$30,200", image: "/icons/car7.jpg" },
    { id: 8, name: "2022 Honda Accord", details: "Sport - Mileage: 10,234 miles", price: "$27,450", image: "/icons/car8.jpg" },
    { id: 9, name: "2023 Ford Mustang", details: "GT Premium - Mileage: 5,321 miles", price: "$40,600", image: "/icons/car9.jpg" },
    { id: 10, name: "2022 Mercedes-Benz C-Class", details: "C 300 - Mileage: 18,872 miles", price: "$45,980", image: "/icons/car10.jpg" },
    { id: 11, name: "2018 Chevrolet Silverado", details: "LTZ - Mileage: 72,903 miles", price: "$28,350", image: "/icons/car11.jpg" },
    { id: 12, name: "2023 Kia Telluride", details: "EX - Mileage: 4,512 miles", price: "$37,500", image: "/icons/car12.jpg" },
    { id: 13, name: "2021 Hyundai Palisade", details: "Limited - Mileage: 8,945 miles", price: "$35,780", image: "/icons/car13.jpg" },
    { id: 14, name: "2020 Lexus RX 350", details: "F Sport - Mileage: 25,931 miles", price: "$38,300", image: "/icons/car14.jpg" },
    { id: 15, name: "2019 Jeep Wrangler", details: "Unlimited Sahara - Mileage: 30,234 miles", price: "$36,150", image: "/icons/car15.jpg" },
  ];

  // Function to handle car selection
  const handleCarClick = (carId) => {
    navigate(`/cars/${carId}`); // Navigate to the car details page
  };

  return (
    <section className="grid-layout">
      {placeholderCars.map((car) => (
        <div
          className="grid-item"
          key={car.id}
          onClick={() => handleCarClick(car.id)} // Navigate on click
          style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
        >
          <img src={car.image} alt={car.name} className="car-image" />
          <h3>{car.name}</h3>
          <p>{car.details}</p>
          <p className="car-price">{car.price}</p>
        </div>
      ))}
    </section>
  );
}

export default CarGrid;