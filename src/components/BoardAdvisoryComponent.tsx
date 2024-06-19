import React from "react";

const advisoryOptions = [
  {
    title: "CORPORATE GOVERNANCE",
    subtitle: "ADVISORY",
    image: "/images/corporate_governance.jpg",
  },
  {
    title: "STRATEGIC BUSINESS",
    subtitle: "CONSULTING",
    image: "/images/strategic_business.jpg",
  },
  {
    title: "BRANDING, PR & IMAGE",
    subtitle: "CONSULTING",
    image: "/images/branding_pr_image.jpg",
  },
  {
    title: "LEGAL ADVISORY",
    subtitle: "CONSULTING",
    image: "/images/legal_advisory.jpg",
  },
  {
    title: "HR TRANSFORMATIONAL",
    subtitle: "CONSULTING",
    image: "/images/hr_transformational.jpg",
  },
  {
    title: "HR TRANSFORMATIONAL",
    subtitle: "CONSULTING",
    image: "/images/hr_transformational.jpg",
  },
];

const AdvisoryCard: React.FC<{
  option: { title: string; subtitle: string; image: string };
}> = ({ option }) => (
  <div className="bg-layout-blue4 shadow-md rounded-lg grid grid-rows-[minmax(200px,75%)_auto] border-4 h-fit min-w-[400px]">
    <div className="bg-yellow-200">Image</div>
    <div className="text-center text-white">
      <div className="p-2">
        <h3 className="text-xl font-semibold">{option.title}</h3>
        <p>{option.subtitle}</p>
      </div>
      <div className="border-2 flex">
        <button className="p-2 flex-1 text-white bg-layout-blue3">
          READ MORE
        </button>
        <button className="p-2 flex-1 text-white bg-layout-blue2">
          REGISTER NOW
        </button>
      </div>
    </div>
  </div>
);

const BoardAdvisory: React.FC = () => (
  <div className="mx-auto w-11/12 my-8 h-auto bg-layout-blue4 py-4">
    <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
      BOARD ADVISORY & CONSULTING
    </h2>
    <div className="flex shadow-lg px-4 gap-4 h-fit justify-center flex-wrap">
      {advisoryOptions.map((option) => (
        <AdvisoryCard key={option.title} option={option} />
      ))}
    </div>
  </div>
);

export default BoardAdvisory;
