import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";

const supportedCountries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Germany",
  "France",
  "Brazil",
  "Mexico",
  "Japan",
  "South Korea",
  "South Africa",
  "Singapore",
  // Add all other countries supported by Udemy payments
];

const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log("Selected Country:", event.target.value); // For testing purposes
  };

  return (
    <div>
      <div className="flex flex-col w-[200px] gap-[0.5em] mb-[0.5em]">
        <label htmlFor="country-select" className="font-bold">
          Country
        </label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={handleChange}
          className="bg-white text-black p-[1em] rounded-[0.2em] border border-black"
        >
          <option value="" disabled>
            Please select...
          </option>
          {supportedCountries.map((country, index) => (
            <option key={index} value={country}>
              <TfiWorld />
              {country}
            </option>
          ))}
        </select>
        {selectedCountry && (
          <p className="mt-2 text-sm text-gray-600">
            You have selected: <strong>{selectedCountry}</strong>
          </p>
        )}
      </div>
      <p className="text-[#595c73] w-[400px]">
        Udemy is required by law to collect applicable transaction taxes for
        purchases made in certain tax jurisdictions.
      </p>
    </div>
  );
};

export default SelectCountry;
