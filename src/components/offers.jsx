// src/components/offers/Offers.jsx
import React, { useState } from "react";

function Offers({ carId }) {
  const [offer, setOffer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Offer made:", { carId, offer });
    // Send offer to API
  };

  return (
    <div>
      <h2>Make an Offer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Your Offer ($)"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />
        <button type="submit">Submit Offer</button>
      </form>
    </div>
  );
}

export default Offers;