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
  <div className="bg-layout-blue4 shadow-md rounded-lg grid grid-rows-[minmax(200px,75%)_auto] border-4 h-fit min-w-[400px]">
    <div className="bg-yellow-200">
      <Image
        src={option.image}
        alt="image"
        width={0}
        height={0}
        sizes="15vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
    </div>
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
  <div className="mx-auto w-11/12 my-8 h-auto bg-layout-blue5 py-4 border-4 border-[#fbb000]">
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
