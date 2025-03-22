const TeamAccess = () => {
  return (
    <div className="mx-10 mb-20 mt-24 flex items-center justify-between rounded-md bg-blackUdemy p-4 text-white">
      <p className="text-sm md:text-base">
        <strong>Are you going to train 2 or more people?</strong> Give your team
        access to Udemy's 27,000+ top-rated courses
      </p>
      <div className="flex gap-2">
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 focus:outline-none">
          Get Udemy Business
        </button>
        <button className="rounded-md bg-gray-200 px-4 py-2 text-sm text-black hover:bg-gray-300 focus:outline-none">
          Discard
        </button>
      </div>
    </div>
  );
};

export default TeamAccess;
