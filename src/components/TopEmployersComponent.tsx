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
    logoSrc: "/images/bmw-logo.png",
    websiteLink: "https://www.bmw.com",
  },
  {
    name: "Jaguar",
    logoSrc: "/images/jaguar-logo.png",
    websiteLink: "https://www.jaguar.com",
  },
  {
    name: "Maruti Suzuki",
    logoSrc: "/images/maruti-suzuki-logo.png",
    websiteLink: "https://www.marutisuzuki.com",
  },
  {
    name: "Audi",
    logoSrc: "/images/audi-logo.png",
    websiteLink: "https://www.audi.com",
  },
  {
    name: "Rolls-Royce",
    logoSrc: "/images/rolls-royce-logo.png",
    websiteLink: "https://www.rolls-roycemotorcars.com",
  },
  {
    name: "Volkswagen",
    logoSrc: "/images/volkswagen-logo.png",
    websiteLink: "https://www.volkswagen.com",
  },
  {
    name: "MG",
    logoSrc: "/images/mg-logo.png",
    websiteLink: "https://www.mgmotor.com",
  },
  {
    name: "Genpact",
    logoSrc: "/images/genpact-logo.png",
    websiteLink: "https://www.genpact.com",
  },
  {
    name: "Birla Sun Life Insurance",
    logoSrc: "/images/birla-sun-life-logo.png",
    websiteLink: "https://lifeinsurance.adityabirlacapital.com",
  },
  {
    name: "Citibank",
    logoSrc: "/images/citibank-logo.png",
    websiteLink: "https://www.citigroup.com",
  },
  {
    name: "Coca-Cola",
    logoSrc: "/images/coca-cola-logo.png",
    websiteLink: "https://www.coca-cola.com",
  },
  {
    name: "DishTV",
    logoSrc: "/images/dishtv-logo.png",
    websiteLink: "https://www.dishtv.in",
  },
  {
    name: "Godfrey Phillips",
    logoSrc: "/images/godfrey-phillips-logo.png",
    websiteLink: "https://www.godfreyphillips.com",
  },
  {
    name: "Standard Chartered",
    logoSrc: "/images/standard-chartered-logo.png",
    websiteLink: "https://www.sc.com",
  },
  {
    name: "Tata Teleservices",
    logoSrc: "/images/tata-logo.png",
    websiteLink: "https://www.tatateleservices.com",
  },
  {
    name: "Tata AIG Insurance",
    logoSrc: "/images/tata-aig-logo.png",
    websiteLink: "https://www.tataaig.com",
  },
  {
    name: "Star India",
    logoSrc: "/images/star-india-logo.png",
    websiteLink: "https://www.starindia.com",
  },
  {
    name: "Dell",
    logoSrc: "/images/dell-logo.png",
    websiteLink: "https://www.dell.com",
  },
  {
    name: "Emaar",
    logoSrc: "/images/emaar-logo.png",
    websiteLink: "https://www.emaar.com",
  },
  {
    name: "DLF",
    logoSrc: "/images/dlf-logo.png",
    websiteLink: "https://www.dlf.in",
  },
  {
    name: "Gillette",
    logoSrc: "/images/gillette-logo.png",
    websiteLink: "https://www.gillette.com",
  },
  {
    name: "HDFC Bank",
    logoSrc: "/images/hdfc-bank-logo.png",
    websiteLink: "https://www.hdfcbank.com",
  },
  {
    name: "Hiranandani Communities",
    logoSrc: "/images/hiranandani-logo.png",
    websiteLink: "https://www.hiranandani.com",
  },
  {
    name: "ICICI Bank",
    logoSrc: "/images/icici-bank-logo.png",
    websiteLink: "https://www.icicibank.com",
  },
  {
    name: "InterGlobe Technologies",
    logoSrc: "/images/interglobe-technologies-logo.png",
    websiteLink: "https://www.igt.in",
  },
  {
    name: "ING Life Insurance",
    logoSrc: "/images/ing-life-insurance-logo.png",
    websiteLink: "https://www.ing.com",
  },
  {
    name: "IREO",
    logoSrc: "/images/ireo-logo.png",
    websiteLink: "https://www.ireo.com",
  },
  {
    name: "Levi's",
    logoSrc: "/images/levis-logo.png",
    websiteLink: "https://www.levi.com",
  },
  {
    name: "M3M",
    logoSrc: "/images/m3m-logo.png",
    websiteLink: "https://www.m3m.in",
  },
  {
    name: "Modi Revlon",
    logoSrc: "/images/modi-revlon-logo.png",
    websiteLink: "https://www.revlon.com",
  },
  {
    name: "Omaxe",
    logoSrc: "/images/omaxe-logo.png",
    websiteLink: "https://www.omaxe.com",
  },
  {
    name: "ResBird",
    logoSrc: "/images/resbird-logo.png",
    websiteLink: "https://www.resbird.com",
  },
  {
    name: "Pantaloons",
    logoSrc: "/images/pantaloons-logo.png",
    websiteLink: "https://www.pantaloons.com",
  },
  {
    name: "Parsvnath",
    logoSrc: "/images/parsvnath-logo.png",
    websiteLink: "https://www.parsvnath.com",
  },
  {
    name: "P&G",
    logoSrc: "/images/pg-logo.png",
    websiteLink: "https://www.pg.com",
  },
  {
    name: "Hyatt",
    logoSrc: "/images/hyatt-logo.png",
    websiteLink: "https://www.hyatt.com",
  },
  {
    name: "Spice Digital",
    logoSrc: "/images/spice-digital-logo.png",
    websiteLink: "https://www.spicedigital.com",
  },
  {
    name: "Oriflame",
    logoSrc: "/images/oriflame-logo.png",
    websiteLink: "https://www.oriflame.com",
  },
  {
    name: "Reliance Digital",
    logoSrc: "/images/reliance-digital-logo.png",
    websiteLink: "https://www.reliancedigital.in",
  },
  {
    name: "Aditya Birla",
    logoSrc: "/images/aditya-birla-logo.png",
    websiteLink: "https://www.adityabirla.com",
  },
  {
    name: "Amway",
    logoSrc: "/images/amway-logo.png",
    websiteLink: "https://www.amway.com",
  },
];

const TopEmployers: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">TOP EMPLOYERS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {employers.map((employer, index) => (
          <a
            key={index}
            href={employer.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white p-2 rounded-lg shadow-lg"
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
