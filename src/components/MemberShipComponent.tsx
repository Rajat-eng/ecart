import Image from "next/image";
const Memberships: React.FC = () => {
  const memberships = [
    {
      img_src: "/Images/membership_component_images/01-MD.jpg",
      membership_name: "Managing Director",
    },
    {
      img_src: "/Images/membership_component_images/02-CEO.jpg",
      membership_name: "Chief Executive Officer",
    },
    {
      img_src: "/Images/membership_component_images/03-CMO.jpg",
      membership_name: "Chief Marketing Officer",
    },
    {
      img_src: "/Images/membership_component_images/04-CBO.jpg",
      membership_name: "Chief Business Officer",
    },
    {
      img_src: "/Images/membership_component_images/05-CDO.jpg",
      membership_name: "Chief Digital Officer",
    },

    {
      img_src: "/Images/membership_component_images/06-CIO.jpg",
      membership_name: "Chief Information Officer",
    },

    {
      img_src: "/Images/membership_component_images/07-CFO.jpg",
      membership_name: "Chief Financial Officer",
    },

    {
      img_src: "/Images/membership_component_images/08-CHRO.jpg",
      membership_name: "Chief HR Officer",
    },
  ];

  return (
    // <div className="mx-auto w-11/12  my-8 min-h-fit bg-layout-blue5 py-4 border-4 border-[#fbb000]">
    //   <h1 className="text-center text-4xl font-bold mb-8 text-white">
    //     CXO Business Network Platform: Connecting Global
    //   </h1>
    //   {/* <div className="flex shadow-lg px-4 gap-4 justify-center flex-wrap"> */}
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 justify-items-center">
    //     {memberships.map((membership) => (
    //       <div
    //         key={membership.membership_name}
    //         className="border-2 grid grid-rows-[minmax(200px,75%)_auto]  h-fit min-w-[400px]"
    //       >
    //         <div className="bg-yellow-200">
    //           <Image
    //             src={membership.img_src}
    //             alt="image"
    //             width={0}
    //             height={0}
    //             sizes="15vw"
    //             style={{ width: "100%", height: "auto" }} // optional
    //             // style={{ objectFit: "cover" }}
    //             // width={100}
    //             // height={100}
    //           />
    //         </div>
    //         <div className=" text-white bg-layout-blue4 ">
    //           <p className="text-center">{membership.membership_name}</p>
    //           <p className="text-center">Business Network</p>

    //           <div className="w-full text-center  bg-layout-blue2">
    //             {" "}
    //             MEMBERSHIP OPEN
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="mx-auto w-11/12 my-8 min-h-fit bg-layout-blue5 py-4 border-4 border-[#fbb000]">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        CXO Business Network Platform: Connecting Global
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 justify-items-center">
        {memberships.map((membership) => (
          <div
            key={membership.membership_name}
            className="border-2 grid grid-rows-[minmax(200px,75%)_auto] w-full max-w-[400px] h-fit"
          >
            <div className="bg-yellow-200">
              <Image
                src={membership.img_src}
                alt="image"
                width={0}
                height={0}
                sizes="15vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="text-white bg-layout-blue4">
              <p className="text-center">{membership.membership_name}</p>
              <p className="text-center">Business Network</p>
              <div className="w-full text-center bg-layout-blue2">
                MEMBERSHIP OPEN
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memberships;
