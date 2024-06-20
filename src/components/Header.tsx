// import Image from "next/image";
// import { FC } from "react";

// interface Icon {
//   id: number;
//   src: string;
//   alt: string;
// }

// const icons: Icon[] = [
//   { id: 1, src: "/facebook-icon.png", alt: "Facebook" },
//   { id: 2, src: "/instagram-icon.png", alt: "Instagram" },
//   { id: 3, src: "/linkedin-icon.png", alt: "LinkedIn" },
//   { id: 4, src: "/whatsapp-icon.png", alt: "WhatsApp" },
//   { id: 5, src: "/youtube-icon.png", alt: "YouTube" },
// ];

// const Header: FC = () => {
//   return (
//     <div className="bg-[#1e1e30] text-white p-4 flex flex-col sm:flex-row items-center justify-between">
//       <div className="flex items-center space-x-4">
//         {icons.map((icon) => (
//           <Image
//             key={icon.id}
//             src={icon.src}
//             alt={icon.alt}
//             width={24}
//             height={24}
//           />
//         ))}
//       </div>
//       <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mt-4 sm:mt-0">
//         <div className="flex items-center space-x-2">
//           <Image src="/email-icon.png" alt="Email" width={24} height={24} />
//           <span>business@ibasearch.com</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Image src="/phone-icon.png" alt="Phone" width={24} height={24} />
//           <span>+91-88027 56666 | +91-88027 06666</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const NavBar: FC = () => {
//   return (
//     <div className="bg-[#1e1e30] flex flex-col sm:flex-row items-center justify-between p-4">
//       <div className="flex items-center">
//         <Image
//           src="/Images/logo.png"
//           alt="International Business Advantage"
//           width={50}
//           height={50}
//         />
//         <span className="ml-2 text-white">ibaglobalsearch.com</span>
//       </div>
//       <div className="flex space-x-4 mt-4 sm:mt-0">
//         <button className="bg-blue-600 text-white px-4 py-2">
//           JOB SEEKERS LOGIN
//         </button>
//         <button className="bg-blue-600 text-white px-4 py-2">
//           EMPLOYERS LOGIN
//         </button>
//         <button className="bg-blue-600 text-white px-4 py-2">
//           PARTNERS LOGIN
//         </button>
//       </div>
//       <div className="mt-4 sm:mt-0">
//         <input type="text" placeholder="Search" className="p-2 rounded-md" />
//         <button className="bg-blue-600 text-white px-4 py-2 ml-2">
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// const MainComponentHeader: FC = () => {
//   return (
//     <div className="w-full">
//       <Header />
//       <NavBar />
//     </div>
//   );
// };

// export default MainComponentHeader;
import Image from "next/image";
import { FC } from "react";

interface Icon {
  id: number;
  src: string;
  alt: string;
}

const icons: Icon[] = [
  { id: 1, src: "/facebook-icon.png", alt: "Facebook" },
  { id: 2, src: "/instagram-icon.png", alt: "Instagram" },
  { id: 3, src: "/linkedin-icon.png", alt: "LinkedIn" },
  { id: 4, src: "/whatsapp-icon.png", alt: "WhatsApp" },
  { id: 5, src: "/youtube-icon.png", alt: "YouTube" },
];

const Header: FC = () => {
  return (
    <div className="bg-[#1e1e30] text-white p-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center space-x-4">
        {icons.map((icon) => (
          <Image
            key={icon.id}
            src={icon.src}
            alt={icon.alt}
            width={24}
            height={24}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mt-4 sm:mt-0">
        <div className="flex items-center space-x-2">
          <Image src="/email-icon.png" alt="Email" width={24} height={24} />
          <span>business@ibasearch.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Image src="/phone-icon.png" alt="Phone" width={24} height={24} />
          <span>+91-88027 56666 | +91-88027 06666</span>
        </div>
      </div>
    </div>
  );
};

const NavBar: FC = () => {
  return (
    <div className="bg-[#1e1e30] flex flex-col sm:flex-row items-center justify-between p-4">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="International Business Advantage"
          width={50}
          height={50}
        />
        <span className="ml-2 text-white">ibaglobalsearch.com</span>
      </div>
      <div className="">
        <div className="flex space-x-2 mt-4 sm:mt-0 py-2">
          <button className="bg-blue-600 text-white px-4 py-2">
            JOB SEEKERS LOGIN
          </button>
          <button className="bg-blue-600 text-white px-4 py-2">
            EMPLOYERS LOGIN
          </button>
          <button className="bg-blue-600 text-white px-4 py-2">
            PARTNERS LOGIN
          </button>
        </div>
        <div className="mt-4 sm:mt-0 border-2 border-white-600 p-2 w-full">
          <input
            type="text"
            placeholder="Search"
            className="p-2"
            style={{ width: "89%" }}
          />
          <button className="bg-blue-600 text-white px-4 py-2 ml-2">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

const MainComponentHeader: FC = () => {
  return (
    <div className="w-full">
      <Header />
      <NavBar />
    </div>
  );
};

export default MainComponentHeader;
