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
    <div className="mx-auto w-11/12  my-8 min-h-fit bg-layout-blue4 py-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        BUSINESS PARTNERSHIPS & COLLABORATIONS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-items-center">
        {partnerships.map((partnership, index) => (
          <div
            key={index}
            className="border-2 grid grid-rows-[minmax(200px,75%)_auto]  h-fit max-w-[400px] w-full"
          >
            <div className="bg-yellow-200">Image</div>
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold mb-2">
                {partnership.title}
              </h3>
              <p className="text-sm mb-4">{partnership.description}</p>
              <div className="flex">
                <button className="p-2 flex-1 text-white bg-layout-blue3">
                  READ MORE
                </button>
                <button className="p-2 flex-1 text-white bg-layout-blue2">
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPartnerships;
