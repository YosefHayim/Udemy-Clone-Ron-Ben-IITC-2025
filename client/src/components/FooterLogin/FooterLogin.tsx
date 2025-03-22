const FooterLogin: React.FC = () => {
  return (
    <div className="flex items-center justify-between border-t border-gray-700 border-y-[#9DA3A7]  bg-blackUdemy px-12 pb-4 pt-2 font-medium text-white">
      <div>
        <h3 className="text-lg font-bold" style={{ lineHeight: "2.2" }}>
          Teach the world online
        </h3>
        <p className="text-sm text-white">
          Create an online video course, reach students across the globe, and
          earn money
        </p>
      </div>
      <div>
        <button className="rounded border border-white px-4 py-2 text-sm font-bold text-white hover:bg-gray-700 focus:outline-none">
          Teach on Udemy
        </button>
      </div>
    </div>
  );
};

export default FooterLogin;
