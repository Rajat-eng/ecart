import React from "react";

const eventsOptions = [
  {
    title: "MUSIC CONCERTS & SHOWS",
    image: "/images/music_concerts_shows.jpg",
  },
  {
    title: "CONFERENCE & FORUMS",
    image: "/images/conference_forums.jpg",
  },
  {
    title: "BUSINESS MEETS",
    image: "/images/business_meets.jpg",
  },
  {
    title: "SPORTS EVENTS",
    image: "/images/sports_events.jpg",
  },
  {
    title: "PRODUCT PROMOTIONS",
    image: "/images/product_promotions.jpg",
  },
];

const EventCard: React.FC<{ option: { title: string; image: string } }> = ({
  option,
}) => (
  <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src={option.image}
      alt={option.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-center">{option.title}</h3>
    </div>
  </div>
);

const BusinessEvents: React.FC = () => (
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
      BUSINESS EVENTS & ENTERTAINMENT
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {eventsOptions.map((option) => (
        <EventCard key={option.title} option={option} />
      ))}
    </div>
  </div>
);

export default BusinessEvents;
