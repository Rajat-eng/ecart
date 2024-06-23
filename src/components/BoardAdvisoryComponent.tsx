import Image from "next/image";
import React from "react";

const advisoryOptions = [
  {
    title: "CORPORATE GOVERNANCE",
    subtitle: "ADVISORY",
    image:
      "/Images/board_advisory_component_images/group-business-analyst-team-analyzing-financial-data-report-meticulous.jpg",
  },
  {
    title: "STRATEGIC BUSINESS",
    subtitle: "CONSULTING",
    image:
      "/Images/board_advisory_component_images/business-meeting-top-view.jpg",
  },
  {
    title: "BRANDING, PR & IMAGE",
    subtitle: "CONSULTING",
    image:
      "/Images/board_advisory_component_images/business-people-shaking-hands-finishing-up-meeting-deals-business-concept.jpg",
  },
  {
    title: "LEGAL ADVISORY",
    subtitle: "CONSULTING",
    image:
      "/Images/board_advisory_component_images/view-3d-gavel-lawyer-s-day.jpg",
  },
  {
    title: "HR TRANSFORMATIONAL",
    subtitle: "CONSULTING",
    image:
      "/Images/board_advisory_component_images/abstract-networking-concept-still-life-arrangement.jpg",
  },
];

const AdvisoryCard: React.FC<{
  option: { title: string; subtitle: string; image: string };
}> = ({ option }) => (
  <div className="bg-layout-blue4 shadow-md rounded-lg overflow-hidden border-2 border-white h-fit w-full">
    <div className="bg-yellow-200 h-48 overflow-hidden">
      <Image
        src={option.image}
        alt={option.title}
        // layout="fill"
        // objectFit="cover"
        loading="lazy"
        width={0}
        height={0}
        sizes="15vw"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
    <div className="text-center text-white">
      <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
      <p className="text-sm mb-4">{option.subtitle}</p>
      <div className="flex border-t-2 border-white mt-2">
        <button className="flex-1 py-2 bg-layout-blue3 hover:bg-layout-blue2 transition-colors">
          READ MORE
        </button>
        <button className="flex-1 py-2 bg-layout-blue2 hover:bg-layout-blue3 transition-colors">
          REGISTER NOW
        </button>
      </div>
    </div>
  </div>
);

const BoardAdvisory: React.FC = () => (
  <div className="mx-auto w-11/12 my-8 h-auto bg-layout-blue5 py-4 border-4 border-[#fbb000]">
    <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
      BOARD ADVISORY & CONSULTING
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
      {advisoryOptions.map((option) => (
        <AdvisoryCard key={option.title} option={option} />
      ))}
    </div>
  </div>
);

export default BoardAdvisory;
