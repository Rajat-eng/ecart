// components/BusinessPartnerships.tsx

import Image from "next/image";
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
    imageSrc:
      "/Images/business_partnerships_component_images/business-people-shaking-hands-together.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "MERGER & ACQUISITION",
    description: "Business Advisory & Collaboration",
    imageSrc:
      "/Images/business_partnerships_component_images/agreement-urban-handshake-cooperation-support.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "FRANCHISE PARTNERSHIP",
    description: "Business Partnership",
    imageSrc:
      "/Images/business_partnerships_component_images/high-angle-view-business-people-playing-jigsaw-office.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "COLLABORATION & TIE-UPS",
    description: "Business Expansion Partnership",
    imageSrc:
      "/Images/business_partnerships_component_images/teamwork-concept-with-hands.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "TECHNOLOGY PARTNERS",
    description: "Business Expansion Partnership",
    imageSrc:
      "/Images/business_partnerships_component_images/modern-equipped-computer-lab.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "FUNDRAISING",
    description: "Foundation",
    imageSrc:
      "/Images/business_partnerships_component_images/front-view-finance-business-elements-assortment.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
];

const BusinessPartnerships: React.FC = () => {
  return (
    <div className="mx-auto w-11/12  my-8 min-h-fit bg-layout-blue4 py-4 border-4 border-[#fbb000]">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        BUSINESS PARTNERSHIPS & COLLABORATIONS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-items-center">
        {partnerships.map((partnership, index) => (
          <div
            key={index}
            className="border-2 grid grid-rows-[minmax(200px,75%)_auto]  h-fit max-w-[400px] w-full"
          >
            <div className="bg-yellow-200">
              <Image
                src={partnership.imageSrc}
                alt="image"
                width={0}
                height={0}
                sizes="15vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>
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
