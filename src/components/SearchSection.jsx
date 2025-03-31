import React from 'react';

function SearchSection() {
  return (
    <section className="search-section">
      <div className="search-fields">
        <input type="text" placeholder="Make" className="search-input" />
        <input type="text" placeholder="Model" className="search-input" />
        <input type="text" placeholder="Zip Code" className="search-input" />
        <button className="search-btn">Search</button>
      </div>
    </section>
  );
}

export default SearchSection;