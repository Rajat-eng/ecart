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
];

const AdvisoryCard: React.FC<{
  option: { title: string; subtitle: string; image: string };
}> = ({ option }) => (
  <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src={option.image}
      alt={option.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{option.title}</h3>
      <p className="text-gray-500">{option.subtitle}</p>
    </div>
    <div className="flex w-full">
      <button className="flex-1 p-2 bg-blue-500 text-white hover:bg-blue-600 transition">
        READ MORE
      </button>
      <button className="flex-1 p-2 bg-blue-700 text-white hover:bg-blue-800 transition">
        REGISTER NOW
      </button>
    </div>
  </div>
);

const BoardAdvisory: React.FC = () => (
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
      BOARD ADVISORY & CONSULTING
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {advisoryOptions.map((option) => (
        <AdvisoryCard key={option.title} option={option} />
      ))}
    </div>
  </div>
);

export default BoardAdvisory;
