// components/GlobalSearch.tsx

import React from "react";

const GlobalSearch: React.FC = () => {
  const positions = [
    {
      title: "MD, Directors, CEO",
      imageSrc: "/images/md-directors-ceo.jpg", // Replace with actual image path
    },
    {
      title: "CXO, VP, GM",
      imageSrc: "/images/cxo-vp-gm.jpg", // Replace with actual image path
    },
    {
      title: "DGM-Managers",
      imageSrc: "/images/dgm-managers.jpg", // Replace with actual image path
    },
    {
      title: "Interns",
      imageSrc: "/images/interns.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-8 text-white bg-blue-900 p-4">
        Global Search Company
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {positions.map((position, index) => (
          <div
            key={index}
            className="bg-blue-900 p-4 rounded-lg shadow-lg text-center"
          >
            <img
              src={position.imageSrc}
              alt={position.title}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-white text-xl font-semibold mb-2">
              {position.title}
            </h2>
            <div className="flex justify-between space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-1/2">
                Job Seeker Apply Here
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md w-1/2">
                Employer Apply Here
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalSearch;
