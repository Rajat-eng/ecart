"use client";
// components/Header.tsx
import React from "react";
import { motion } from "framer-motion";

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

const scrollingAnimation = {
  animate: {
    x: ["100%", "-100%"], // move from right to left
  },
  transition: {
    repeat: Infinity,
    duration: 20, // control the speed of scrolling
    ease: "linear",
  },
};

const CityHeader: React.FC = () => {
  return (
    <header>
      <div className="bg-red-600 text-white text-sm py-2 overflow-hidden whitespace-nowrap">
        <motion.div
          className="container mx-auto flex space-x-4"
          {...scrollingAnimation}
        >
          {indianCities.map((city, index) => (
            <span key={index} className="flex items-center">
              {city}
              {index < indianCities.length - 1 && (
                <span className="mx-2">|</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
      <div className="bg-blue-900 text-white text-sm py-2 overflow-hidden whitespace-nowrap">
        <motion.div
          className="container mx-auto flex space-x-4"
          {...scrollingAnimation}
        >
          {internationalCities.map((city, index) => (
            <span key={index} className="flex items-center">
              {city}
              {index < internationalCities.length - 1 && (
                <span className="mx-2">|</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default CityHeader;
