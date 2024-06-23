import Image from "next/image";
import React from "react";

// Define the event options
const eventsOptions = [
  {
    title: "MUSIC CONCERTS & SHOWS",
    image:
      "/Images/business_events_component_images/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space.jpg",
  },
  {
    title: "CONFERENCE & FORUMS",
    image:
      "/Images/business_events_component_images/blurred-speaker-giving-talk-business-meeting-rear-view-audience-conference-hall-unre.jpg",
  },
  {
    title: "BUSINESS MEETS",
    image:
      "/Images/business_events_component_images/people-are-sitting-round-table-generative-ai.jpg",
  },
  {
    title: "SPORTS EVENTS",
    image:
      "/Images/business_events_component_images/close-up-people-running-city.jpg",
  },
  {
    title: "PRODUCT PROMOTIONS",
    image:
      "/Images/business_events_component_images/female-business-executive-giving-presentation.jpg",
  },
];

// EventCard component to render each event option
const EventCard: React.FC<{ option: { title: string; image: string } }> = ({
  option,
}) => (
  <div className="flex flex-col items-center shadow-md rounded-lg overflow-hidden h-full relative">
    <Image
      src={option.image}
      alt={option.title}
      layout="fill"
      loading="lazy"
      style={{ objectFit: "cover" }}
    />
    <div className="p-4t text-white ">
      <h3 className="text-lg font-semibold text-center">{option.title}</h3>
    </div>
  </div>
);

// BusinessEvents component to render the main layout
const BusinessEvents: React.FC = () => (
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-layout-blue5 border-4 border-yellow-500">
    <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
      BUSINESS EVENTS & ENTERTAINMENT
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left side: Larger Music Concerts & Shows image */}
      <div className="flex justify-center items-center">
        <div className="w-full lg:w-auto lg:h-full">
          {/* <EventCard option={eventsOptions[0]} /> */}
          <div>
            <Image
              src="/Images/business_events_component_images/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space.jpg"
              alt="MUSIC CONCERTS & SHOWS"
              width={1000}
              height={1000}
              sizes="15vw"
              // style={{ width: "100%", height: "auto" }}
            />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold text-center">
                MUSIC CONCERTS & SHOWS
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Right side: Grid for the remaining event options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventsOptions.slice(1).map((option) => (
          <EventCard key={option.title} option={option} />
        ))}
      </div>
    </div>
  </div>
);

export default BusinessEvents;
