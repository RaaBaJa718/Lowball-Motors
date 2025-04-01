import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@radix-ui/react-select';
import { FaSearch } from "react-icons/fa";
import { placeholderCars } from "./CarGrid"; 
import HeroSection from './HeroSection'; // Import HeroSection

function SearchSection() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);

  const years = [
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025
  ];

  const priceRanges = [
    { label: "Under $30,000", value: "0-30000" },
    { label: "$30,000 - $35,000", value: "30000-35000" },
    { label: "$35,000 - $45,000", value: "35000-45000" },
    { label: "Above $45,000", value: "45000-999999" },
  ];

  const carMakes = [
    ...new Set(
      placeholderCars
        .map((car) => car.name.split(" ")[1])
        .filter(Boolean)
    ),
  ];

  const handleSearch = () => {
    const filtered = placeholderCars.filter(car => {
      const isYearMatch = selectedYear ? car.name.includes(selectedYear) : true;
      const isMakeMatch = selectedMake ? car.name.includes(selectedMake) : true;
      const isPriceMatch = selectedPrice
        ? car.price.split('$')[1] >= selectedPrice.split('-')[0] && car.price.split('$')[1] <= selectedPrice.split('-')[1]
        : true;
      
      return isYearMatch && isMakeMatch && isPriceMatch;
    });

    setFilteredCars(filtered); // Update filtered cars
  };

  return (
    <div className="mt-6 p-5 bg-blue-100 rounded-md md:rounded-full flex flex-col md:flex-row gap-5 px-5 items-center justify-center w-[60%] h-full mx-auto">
      {/* Year Select */}
      <Select onValueChange={setSelectedYear}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg rounded-md">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent className="rounded-md">
          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator className="hidden md:block h-10 w-[2px] bg-gray-400" />

      {/* Car Makes Select */}
      <Select onValueChange={setSelectedMake}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg rounded-md">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent className="rounded-md">
          {carMakes.map((make, index) => (
            <SelectItem key={index} value={make}>{make}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator className="hidden md:block h-10 w-[2px] bg-gray-400" />

      {/* Pricing Select (Fixed Ranges) */}
      <Select onValueChange={setSelectedPrice}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg rounded-md">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent className="rounded-md">
          {priceRanges.map((range, index) => (
            <SelectItem key={index} value={range.value}>
              {range.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Button */}
      <div>
        <FaSearch className="text-[50px] bg-blue-300 rounded-full p-3 text-black hover:scale-105 transition-all" onClick={handleSearch} />
      </div>

      {/* Pass filteredCars to HeroSection */}
      {filteredCars.length > 0 && <HeroSection cars={filteredCars} />}
    </div>
  );
}

export default SearchSection;
