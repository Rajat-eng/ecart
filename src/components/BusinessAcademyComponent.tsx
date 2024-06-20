// components/BusinessAcademy.tsx

import Image from "next/image";
import React from "react";

type Course = {
  title: string;
  description: string;
  imageSrc: string;
  readMoreLink: string;
  registerLink: string;
};

const courses: Course[] = [
  {
    title: "BOARD COACHING",
    description: "Board Coaching",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "CXO COACHING",
    description: "CXO Coaching",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "YOUNG LEADERS",
    description: "Young Leaders",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "EXECUTIVE COACHING",
    description: "Executive Coaching",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "COACHING THE TRAINERS",
    description: "Coaching The Trainers",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "YOU ARE A BRAND",
    description: "You Are A Brand",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "SELL LIKE A CHAMPION",
    description: "Sell Like A Champion",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "POWER SELLING",
    description: "Power Selling",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "IMPACT PRESENTATIONS",
    description: "Impact Presentations",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "CUSTOMER FIRST",
    description: "Customer First",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "INFLUENCING OTHERS",
    description: "Influencing Others",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "DECISION MAKING",
    description: "Decision Making",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "NEGOTIATION TECHNIQUES",
    description: "Negotiation Techniques",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "BUSINESS ETIQUETTES",
    description: "Business Etiquettes",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
  {
    title: "MANAGING COMMUNICATION",
    description: "Managing Communication",
    imageSrc: "/Images/business_academy_component_images/meeting-room.jpg",
    readMoreLink: "#",
    registerLink: "#",
  },
];

const BusinessAcademy: React.FC = () => {
  return (
    <div className="mx-auto w-11/12  my-8 min-h-fit bg-layout-blue4 py-4 border-4 border-[#fbb000]">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        VRK BUSINESS ACADEMY
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-items-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border-2 grid grid-rows-[minmax(200px,75%)_auto]  h-fit max-w-[400px] w-full"
          >
            <div className="bg-yellow-200">
              {" "}
              <Image
                src={course.imageSrc}
                alt="image"
                width={0}
                height={0}
                sizes="15vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-sm mb-4">{course.description}</p>
              <div className="flex justify-between">
                <a
                  href={course.readMoreLink}
                  className="text-blue-300 hover:text-blue-500"
                >
                  READ MORE
                </a>
                <a
                  href={course.registerLink}
                  className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  REGISTER NOW
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessAcademy;
