// components/Footer.tsx
import Image from "next/image";
import React from "react";

const quickLinks = [
  "About Us",
  "International Business Advantage",
  "Global Retained Search Company",
  "Management Services",
  "Coaching & Mentoring",
  "Internship Programs",
];

const memberships = [
  "VRK Billionaires Club",
  "VRK Millionaires Club",
  "VRK Global CXO Network Club",
  "Global Diversity Business Club",
  "Events & Entertainment",
];

const partnerships = [
  "Business Opportunities",
  "Franchise Partnership",
  "Collaborations & Tie Ups",
  "Luxury Marketplace",
  "Luxury Travel Holidays",
  "Luxury Real Estate",
];

interface Icon {
  id: number;
  src: string;
  alt: string;
}

const icons: Icon[] = [
  { id: 1, src: "/Images/fb-logo.png", alt: "Facebook" },
  { id: 2, src: "/Images/instagram-logo.png", alt: "Instagram" },
  { id: 3, src: "/Images/linkedin-logo.png", alt: "LinkedIn" },
  { id: 4, src: "/Images/x-logo.png", alt: "Twitter" },
  { id: 5, src: "/Images/wa-logo.png", alt: "WhatsApp" },
  { id: 6, src: "/Images/yt-logo.png", alt: "YouTube" },
];

const Footer: React.FC = () => {
  return (
    <footer className=" bg-layout-blue5  text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="font-semibold mb-4">Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link} className="mb-2">
                {link}
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            {icons.map((icon, index) => (
              <a href="#" className="text-xl" key={index}>
                <Image
                  key={icon.id}
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Get Your Membership</h2>
          <ul>
            {memberships.map((membership) => (
              <li key={membership} className="mb-2">
                {membership}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Partnership Opportunities</h2>
          <ul>
            {partnerships.map((partnership) => (
              <li key={partnership} className="mb-2">
                {partnership}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Contact Today</h2>
          <p className="mb-2">International Business Advantage</p>
          <p className="mb-2">Call us Today:</p>
          <p className="mb-2">+91 88027-56666</p>
          <p className="mb-2">+91 88027-06666</p>
          <p className="mb-4">
            Email:{" "}
            <a href="mailto:business@ibasearch.com" className="underline">
              business@ibasearch.com
            </a>
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="email"
              placeholder="johndoe@email.com"
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="tel"
              placeholder="+971 00-000-0000"
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <textarea
              placeholder="Type your Message here"
              className="w-full p-2 rounded bg-gray-800 text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 rounded bg-blue-700 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 flex justify-between items-center border-t border-gray-700 pt-4">
        <div className="flex space-x-4"></div>
        <p className="text-gray-400">
          © 2024 IBA Manpower Consulting Services, India. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
