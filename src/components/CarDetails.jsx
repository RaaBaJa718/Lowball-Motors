// src/components/cars/CarDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

function CarDetails() {
  const { id } = useParams(); // Retrieve car ID from the URL

  // Placeholder for car data (replace with API call if needed)
  const placeholderCars = [
    { id: 1, name: "2023 Tesla Model 3", details: "Long Range - Mileage: 39,521 miles", price: "$34,998", image: "/icons/car1.jpg", sellerName: "John Doe" },
    { id: 2, name: "2020 Toyota Camry XSE", details: "Technology Package - Mileage: 22,704 miles", price: "$28,516", image: "/icons/car2.jpg", sellerName: "Jane Smith" },
    { id: 3, name: "2018 GMC Acadia", details: "Denali - Mileage: 92,203 miles", price: "$22,948", image: "/icons/car3.jpg", sellerName: "Mike Johnson" },
    // Add more cars here
  ];

  // Find car by ID
  const car = placeholderCars.find((car) => car.id === parseInt(id));

  // Handle case where no car is found
  if (!car) {
    return <p>Car not found.</p>;
  }

  return (
    <div className="car-details">
      <img src={car.image} alt={car.name} className="car-image" />
      <h2>{car.name}</h2>
      <p>{car.details}</p>
      <p className="car-price">{car.price}</p>
      <p>Seller: {car.sellerName}</p>
    </div>
  );
}

export default CarDetails;