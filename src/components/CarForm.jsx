// src/components/cars/CarForm.jsx
import React, { useState } from "react";

function CarForm({ onAddCar }) {
  const [carData, setCarData] = useState({
    name: "",
    details: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting car:", carData);
    // Trigger callback to add car
    onAddCar(carData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Car Name"
        value={carData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="details"
        placeholder="Details (e.g., mileage, features)"
        value={carData.details}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={carData.price}
        onChange={handleChange}
      />
      <input
        type="file"
        name="image"
        onChange={(e) => setCarData({ ...carData, image: e.target.files[0] })}
      />
      <button type="submit">Add Car</button>
    </form>
  );
}

export default CarForm;