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
    <div className="mx-auto w-11/12 my-8 min-h-fit bg-layout-blue4 py-4">
      <h1 className="text-center text-2xl font-bold mb-8 text-white p-4">
        Global Search Company
      </h1>
      <div className="flex flex-wrap shadow-lg h-auto px-4 gap-4 justify-center">
        {positions.map((position, index) => (
          <div
            key={index}
            className="bg-layout-blue4 border-2 p-2 rounded-lg shadow-lg text-center h-fit min-h-[300px] "
          >
            <div className="h-3/4 min-h-[200px] bg-yellow-200 ">Image</div>
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
