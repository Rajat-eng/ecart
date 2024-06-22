// components/GlobalSearch.tsx

import Image from "next/image";
import React from "react";

const GlobalSearch: React.FC = () => {
  const positions = [
    {
      title: "MD, Directors, CEO",
      imageSrc:
        "/Images/global_search_component_images/close-up-documents-with-businessmen-blurred-background.jpg",
    },
    {
      title: "CXO, VP, GM",
      imageSrc:
        "/Images/global_search_component_images/close-up-statistics-with-employees-background.jpg",
    },
    {
      title: "DGM-Managers",
      imageSrc:
        "/Images/global_search_component_images/close-up-hands-top-each-other.jpg",
    },
    {
      title: "Interns",
      imageSrc:
        "/Images/global_search_component_images/document-marketing-strategy-business-concept.jpg",
    },
  ];

  return (
    // <div className="mx-auto w-11/12 my-8 min-h-fit bg-layout-blue5 py-4 border-4 border-[#fbb000]">
    //   <h1 className="text-center text-2xl font-bold mb-8 text-white p-4">
    //     Global Search Company
    //   </h1>
    //   <div className="flex flex-wrap shadow-lg h-auto px-4 gap-4 justify-center">
    //     {positions.map((position, index) => (
    //       <div
    //         key={index}
    //         className="bg-layout-blue4  p-2 rounded-lg shadow-lg text-center h-fit min-h-[300px] "
    //       >
    //         <div className="h-3/4 min-h-[200px] bg-yellow-200 ">
    //           <Image
    //             src={position.imageSrc}
    //             alt="image"
    //             width={0}
    //             height={0}
    //             sizes="15vw"
    //             style={{ width: "100%", height: "auto" }} // optional
    //           />
    //         </div>
    //         <h2 className="text-white text-xl font-semibold mb-2">
    //           {position.title}
    //         </h2>
    //         <div className="flex justify-between space-x-2">
    //           <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-1/2">
    //             Job Seeker Apply Here
    //           </button>
    //           <button className="bg-blue-700 text-white px-4 py-2 rounded-md w-1/2">
    //             Employer Apply Here
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="mx-auto w-11/12 my-8 min-h-fit bg-layout-blue5 py-4 border-4 border-[#fbb000]">
      <h1 className="text-center text-2xl font-bold mb-8 text-white p-4">
        Global Search Company
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 shadow-lg">
        {positions.map((position, index) => (
          <div
            key={index}
            className="bg-layout-blue4 p-2 rounded-lg shadow-lg text-center h-fit min-h-[300px]"
          >
            <div className="h-3/4 min-h-[200px] bg-yellow-200">
              <Image
                src={position.imageSrc}
                alt="image"
                width={0}
                height={0}
                sizes="15vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>
            <h2 className="text-white text-xl font-semibold mb-2">
              {position.title}
            </h2>
            <div className="flex justify-between space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-1/2">
                Job Seeker Apply Here
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md w-1/2">
                Employer Apply Here
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalSearch;
