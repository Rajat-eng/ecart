// components/BusinessPartnerships.tsx

import React from "react";

type Partnership = {
  title: string;
  description: string;
  imageSrc: string;
  readMoreLink: string;
  registerLink: string;
};

const partnerships: Partnership[] = [
  {
    title: "INVESTORS CONNECT",
    description: "Business Investment Partnership",
    imageSrc: "/images/investors-connect.jpg", // Replace with actual image source
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "MERGER & ACQUISITION",
    description: "Business Advisory & Collaboration",
    imageSrc: "/images/merger-acquisition.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "FRANCHISE PARTNERSHIP",
    description: "Business Partnership",
    imageSrc: "/images/franchise-partnership.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "COLLABORATION & TIE-UPS",
    description: "Business Expansion Partnership",
    imageSrc: "/images/collaboration-tie-ups.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "TECHNOLOGY PARTNERS",
    description: "Business Expansion Partnership",
    imageSrc: "/images/technology-partners.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "FUNDRAISING",
    description: "Foundation",
    imageSrc: "/images/fundraising.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
];

const BusinessPartnerships: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        BUSINESS PARTNERSHIPS & COLLABORATIONS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partnerships.map((partnership, index) => (
          <div key={index} className="bg-blue-800 p-4 rounded-lg shadow-md">
            <img
              src={partnership.imageSrc}
              alt={partnership.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{partnership.title}</h3>
            <p className="text-sm mb-4">{partnership.description}</p>
            <div className="flex justify-between">
              <a
                href={partnership.readMoreLink}
                className="text-blue-300 hover:text-blue-500"
              >
                READ MORE
              </a>
              <a
                href={partnership.registerLink}
                className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPartnerships;
