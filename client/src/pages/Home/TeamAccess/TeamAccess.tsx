const TeamAccess = () => {
  return (
    <div className="bg-[#1c1d1f] text-white p-4 rounded-md flex justify-between items-center mt-24 mb-20 mx-10">
      <p className="text-sm md:text-base">
        <strong>Are you going to train 2 or more people?</strong> Give your team
        access to Udemy's 27,000+ top-rated courses
      </p>
      <div className="flex gap-2">
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm">
          Get Udemy Business
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-md text-sm">
          Discard
        </button>
      </div>
    </div>
  );
};

export default TeamAccess;
