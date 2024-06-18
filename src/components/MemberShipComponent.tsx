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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-8">
        CXO Business Network Platform: Connecting Global
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-xl font-semibold mb-2">{membership}</h2>
            <p className="text-gray-600">Business Network</p>
            <p className="mt-4 text-green-500 font-bold">Membership Open</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memberships;
