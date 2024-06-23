// components/TopEmployers.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    logoSrc: "/Images/top_employers_component_images/Audi_logo_detail.svg.png",
    websiteLink: "https://www.audi.com",
  },
  {
    name: "Rolls-Royce",
    logoSrc:
      "/Images/top_employers_component_images/rolls-royce-brand-logo-car-symbol-with-name-black-design-british-automobile-illustration-free-vector.jpg",
    websiteLink: "https://www.rolls-roycemotorcars.com",
  },
  {
    name: "Volkswagen",
    logoSrc: "/Images/top_employers_component_images/volkswagen.png",
    websiteLink: "https://www.volkswagen.com",
  },
  {
    name: "MG",
    logoSrc: "/Images/top_employers_component_images/MG.png",
    websiteLink: "https://www.mgmotor.com",
  },
  {
    name: "Genpact",
    logoSrc: "/Images/top_employers_component_images/Genpact.jpg",
    websiteLink: "https://www.genpact.com",
  },
  {
    name: "Birla Sun Life Insurance",
    logoSrc: "/Images/top_employers_component_images/Birla.jpg",
    websiteLink: "https://lifeinsurance.adityabirlacapital.com",
  },
  {
    name: "Citibank",
    logoSrc: "/Images/top_employers_component_images/citibank.jpg",
    websiteLink: "https://www.citigroup.com",
  },
  {
    name: "Coca-Cola",
    logoSrc: "/Images/top_employers_component_images/Coca.jpg",
    websiteLink: "https://www.coca-cola.com",
  },
  {
    name: "DishTV",
    logoSrc: "/Images/top_employers_component_images/Dish_TV.jpg",
    websiteLink: "https://www.dishtv.in",
  },
  {
    name: "Godfrey Phillips",
    logoSrc: "/Images/top_employers_component_images/Godfrey.jpg",
    websiteLink: "https://www.godfreyphillips.com",
  },
  {
    name: "Standard Chartered",
    logoSrc: "/Images/top_employers_component_images/Standard_Chartered.jpg",
    websiteLink: "https://www.sc.com",
  },
  {
    name: "Tata Teleservices",
    logoSrc: "/Images/top_employers_component_images/tcs.jpg",
    websiteLink: "https://www.tatateleservices.com",
  },
  {
    name: "Tata AIG Insurance",
    logoSrc: "/Images/top_employers_component_images/Tata-aig.jpg",
    websiteLink: "https://www.tataaig.com",
  },
  {
    name: "Star India",
    logoSrc: "/Images/top_employers_component_images/star.jpg",
    websiteLink: "https://www.starindia.com",
  },
  {
    name: "Dell",
    logoSrc: "/Images/top_employers_component_images/Dell.jpg",
    websiteLink: "https://www.dell.com",
  },
  {
    name: "Emaar",
    logoSrc: "/Images/top_employers_component_images/Emaar-.jpg",
    websiteLink: "https://www.emaar.com",
  },
  {
    name: "DLF",
    logoSrc: "/Images/top_employers_component_images/dlf.jpg",
    websiteLink: "https://www.dlf.in",
  },
  {
    name: "Gillette",
    logoSrc: "/Images/top_employers_component_images/gillette.jpg",
    websiteLink: "https://www.gillette.com",
  },
  {
    name: "HDFC Bank",
    logoSrc: "/Images/top_employers_component_images/HDFC_Logo.jpg",
    websiteLink: "https://www.hdfcbank.com",
  },
  {
    name: "Hiranandani Communities",
    logoSrc: "/Images/top_employers_component_images/hiranandani.jpg",
    websiteLink: "https://www.hiranandani.com",
  },
  {
    name: "ICICI Bank",
    logoSrc: "/Images/top_employers_component_images/icicibank.jpg",
    websiteLink: "https://www.icicibank.com",
  },
  {
    name: "InterGlobe Technologies",
    logoSrc: "/Images/top_employers_component_images/IGT_LogoIGT_Logo.jpg",
    websiteLink: "https://www.igt.in",
  },
  {
    name: "ING Life Insurance",
    logoSrc: "/Images/top_employers_component_images/ING.jpg",
    websiteLink: "https://www.ing.com",
  },
  {
    name: "IREO",
    logoSrc: "/Images/top_employers_component_images/IREOlogo.jpg",
    websiteLink: "https://www.ireo.com",
  },
  {
    name: "Levi's",
    logoSrc: "/Images/top_employers_component_images/LevisStrauss.jpg",
    websiteLink: "https://www.levi.com",
  },
  {
    name: "M3M",
    logoSrc: "/Images/top_employers_component_images/M3M.jpg",
    websiteLink: "https://www.m3m.in",
  },
  {
    name: "Modi Revlon",
    logoSrc: "/Images/top_employers_component_images/modi-revlon.jpg",
    websiteLink: "https://www.revlon.com",
  },
  {
    name: "Omaxe",
    logoSrc: "/Images/top_employers_component_images/omaxe.jpg",
    websiteLink: "https://www.omaxe.com",
  },
  {
    name: "ResBird",
    logoSrc: "/Images/top_employers_component_images/Resbird.jpg",
    websiteLink: "https://www.resbird.com",
  },
  {
    name: "Pantaloons",
    logoSrc: "/Images/top_employers_component_images/Pantaloon.jpg",
    websiteLink: "https://www.pantaloons.com",
  },
  {
    name: "Parsvnath",
    logoSrc: "/Images/top_employers_component_images/parsvnath_logo.jpg",
    websiteLink: "https://www.parsvnath.com",
  },
  {
    name: "P&G",
    logoSrc: "/Images/top_employers_component_images/p-g.jpg",
    websiteLink: "https://www.pg.com",
  },
  {
    name: "Hyatt",
    logoSrc: "/Images/top_employers_component_images/hyatt-logo.jpg",
    websiteLink: "https://www.hyatt.com",
  },
  {
    name: "Spice Digital",
    logoSrc: "/Images/top_employers_component_images/Spice.jpg",
    websiteLink: "https://www.spicedigital.com",
  },
  {
    name: "Oriflame",
    logoSrc: "/Images/top_employers_component_images/oriflame.jpg",
    websiteLink: "https://www.oriflame.com",
  },
  {
    name: "Reliance Digital",
    logoSrc: "/Images/top_employers_component_images/Reliance.jpg",
    websiteLink: "https://www.reliancedigital.in",
  },
  {
    name: "Dish TV",
    logoSrc: "/Images/top_employers_component_images/Dish_TV.jpg",
    websiteLink: "https://www.dishtv.in/",
  },
  {
    name: "Aditya Birla",
    logoSrc: "/Images/top_employers_component_images/Aditya.jpg",
    websiteLink: "https://www.adityabirla.com",
  },
  {
    name: "Amway",
    logoSrc: "/Images/top_employers_component_images/Amway.jpg",
    websiteLink: "https://www.amway.com",
  },
];

const TopEmployers: React.FC = () => {
  return (
    <div className="mx-auto w-11/12  my-8 min-h-fit bg-layout-blue5 py-4 border-4 border-[#fbb000]">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        TOP EMPLOYERS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 px-4 justify-items-center">
        {employers.map((employer, index) => (
          <Link
            key={index}
            href={employer.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 w-full h-32 shadow-lg "
          >
            <div className="rounded-lg w-full h-full relative">
              <Image
                src={employer.logoSrc}
                alt={employer.name}
                layout="fill"
                loading="lazy"
                style={{ objectFit: "fill", backgroundPosition: "center" }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopEmployers;
