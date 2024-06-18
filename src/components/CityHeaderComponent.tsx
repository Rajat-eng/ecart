// components/Header.tsx
import React from "react";

const indianCities = [
  "Delhi",
  "Gurugram",
  "Chandigarh",
  "Ahmedabad",
  "Mumbai",
  "Pune",
  "Goa",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
];

const internationalCities = [
  "New York",
  "California",
  "Toronto",
  "United Kingdom",
  "France",
  "Germany",
  "Italy",
  "Dubai",
  "Singapore",
  "Malaysia",
  "Philippines",
  "Indonesia",
  "Australia",
  "New Zealand",
];

const CityHeader: React.FC = () => {
  return (
    <header>
      <div className="bg-red-600 text-white text-sm py-2">
        <div className="container mx-auto flex flex-wrap justify-center space-x-4">
          {indianCities.map((city) => (
            <span key={city} className="flex items-center">
              {city}
              {city !== indianCities[indianCities.length - 1] && (
                <span className="mx-2">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto flex flex-wrap justify-center space-x-4">
          {internationalCities.map((city) => (
            <span key={city} className="flex items-center">
              {city}
              {city !== internationalCities[internationalCities.length - 1] && (
                <span className="mx-2">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default CityHeader;
