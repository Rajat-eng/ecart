const Memberships: React.FC = () => {
  const memberships = [
    "Managing Director",
    "Chief Digital Officer",
    "Chief Executive Officer",
    "Chief Information Officer",
    "Chief Marketing Officer",
    "Chief Financial Officer",
    "Chief Business Officer",
    "Chief HR Officer",
  ];

  return (
    <div className="mx-auto w-11/12  my-8 min-h-fit bg-layout-blue4 py-4 ">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        CXO Business Network Platform: Connecting Global
      </h1>
      <div className="flex shadow-lg px-4 gap-4 justify-center flex-wrap">
        {memberships.map((membership) => (
          <div
            key={membership}
            className="border-2 grid grid-rows-[minmax(200px,75%)_auto]  h-fit min-w-[400px]"
          >
            <div className="bg-yellow-200">Image</div>
            <div className=" text-white bg-layout-blue4 ">
              <p className="text-center">{membership}</p>
              <p className="text-center">Business Network</p>

              <div className="w-full text-center  bg-layout-blue2">
                {" "}
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
