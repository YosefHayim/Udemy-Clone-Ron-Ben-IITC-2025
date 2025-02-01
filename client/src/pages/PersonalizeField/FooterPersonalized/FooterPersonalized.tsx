const FooterPersonalized = () => {
  return (
    <div className="absolute bottom-0 p-[1em] w-full bg-white shadow-personalizedFooterShadow">
      <div className="text-end">
        <button className="font-bold px-6 py-[1em] bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default FooterPersonalized;
