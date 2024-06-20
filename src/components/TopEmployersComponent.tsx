// components/TopEmployers.tsx

import React from "react";

type Employer = {
  name: string;
  logoSrc: string;
  websiteLink: string;
};

const employers: Employer[] = [
  {
    name: "BMW",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.bmw.com",
  },
  {
    name: "Jaguar",
    logoSrc:
      "/Images/top_employers_component_images/jaguar-cars-logo-png-transparent.png",
    websiteLink: "https://www.jaguar.com",
  },
  {
    name: "Maruti Suzuki",
    logoSrc: "/Images/top_employers_component_images/maruti.jpg",
    websiteLink: "https://www.marutisuzuki.com",
  },
  {
    name: "Audi",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.audi.com",
  },
  {
    name: "Rolls-Royce",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.rolls-roycemotorcars.com",
  },
  {
    name: "Volkswagen",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.volkswagen.com",
  },
  {
    name: "MG",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.mgmotor.com",
  },
  {
    name: "Genpact",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.genpact.com",
  },
  {
    name: "Birla Sun Life Insurance",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://lifeinsurance.adityabirlacapital.com",
  },
  {
    name: "Citibank",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.citigroup.com",
  },
  {
    name: "Coca-Cola",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.coca-cola.com",
  },
  {
    name: "DishTV",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.dishtv.in",
  },
  {
    name: "Godfrey Phillips",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.godfreyphillips.com",
  },
  {
    name: "Standard Chartered",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.sc.com",
  },
  {
    name: "Tata Teleservices",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.tatateleservices.com",
  },
  {
    name: "Tata AIG Insurance",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.tataaig.com",
  },
  {
    name: "Star India",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.starindia.com",
  },
  {
    name: "Dell",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.dell.com",
  },
  {
    name: "Emaar",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.emaar.com",
  },
  {
    name: "DLF",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.dlf.in",
  },
  {
    name: "Gillette",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.gillette.com",
  },
  {
    name: "HDFC Bank",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.hdfcbank.com",
  },
  {
    name: "Hiranandani Communities",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.hiranandani.com",
  },
  {
    name: "ICICI Bank",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.icicibank.com",
  },
  {
    name: "InterGlobe Technologies",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.igt.in",
  },
  {
    name: "ING Life Insurance",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.ing.com",
  },
  {
    name: "IREO",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.ireo.com",
  },
  {
    name: "Levi's",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.levi.com",
  },
  {
    name: "M3M",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.m3m.in",
  },
  {
    name: "Modi Revlon",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.revlon.com",
  },
  {
    name: "Omaxe",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.omaxe.com",
  },
  {
    name: "ResBird",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.resbird.com",
  },
  {
    name: "Pantaloons",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.pantaloons.com",
  },
  {
    name: "Parsvnath",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.parsvnath.com",
  },
  {
    name: "P&G",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.pg.com",
  },
  {
    name: "Hyatt",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.hyatt.com",
  },
  {
    name: "Spice Digital",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.spicedigital.com",
  },
  {
    name: "Oriflame",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.oriflame.com",
  },
  {
    name: "Reliance Digital",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.reliancedigital.in",
  },
  {
    name: "Aditya Birla",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.adityabirla.com",
  },
  {
    name: "Amway",
    logoSrc: "/Images/top_employers_component_images/bmw_logo.jpg",
    websiteLink: "https://www.amway.com",
  },
];

const TopEmployers: React.FC = () => {
  return (
    <div className="mx-auto w-11/12  my-8 min-h-fit bg-layout-blue4 py-4 border-4 border-[#fbb000]">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        TOP EMPLOYERS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-items-center">
        {employers.map((employer, index) => (
          <a
            key={index}
            href={employer.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white p-2 rounded-lg shadow-lg w-3/4"
          >
            <img
              src={employer.logoSrc}
              alt={employer.name}
              className="max-h-16 max-w-full object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopEmployers;
