import { IoMdSearch } from "react-icons/io";

const CertificationsP4 = () => {
  return (
    <div className="w-[700px] text-start p-[2em] ml-[8em] mb-[2em]">
      <h1 className="text-[1.2em] font-bold mb-[1em]">
        Are you interested in any certifications?
      </h1>
      <div className="flex flex-row items-center border border-[#9194ac] rounded-[0.3em] p-[0.5em] w-full bg-white">
        <IoMdSearch className="text-[1.5em] text-gray-500 ml-[0.5em]" />
        <input
          type="text"
          placeholder="Search for a certification"
          className="w-full p-[0.8em] bg-white text-black focus:bg-white focus:text-black focus:outline-none placeholder:font-bold placeholder:text-[#303141] focus:border-purple-800 border-none"
        />
      </div>
      <div className="mt-[1em]">
        <b>Popular with learners like you</b>
        <div className="hover:bg-gray-100 cursor-pointer flex items-center gap-[1.5em] py-[2em] border border-gray-300 rounded-[0.3em] mt-[1em] px-[1em] text-[1.3em]">
          <input
            type="checkbox"
            id="chartered-financial-Analyst-cfa"
            name="chartered-financial-Analyst-cfa"
          />
          <label
            htmlFor="chartered-financial-Analyst-cfa"
            className="font-bold"
          >
            Chartered Financial Analyst (CFA)
          </label>
        </div>
        <div className="hover:bg-gray-100 cursor-pointer flex items-center gap-[1.5em] py-[2em] border border-gray-300 rounded-[0.3em] mt-[1em] px-[1em] text-[1.3em]">
          <input
            type="checkbox"
            id="association-of-chartered-certified-accountants-acca"
            name="association-of-chartered-certified-accountants-acca"
          />
          <label
            htmlFor="association-of-chartered-certified-accountants-acca"
            className="font-bold"
          >
            Association of Chartered Certified Accountants (ACCA)
          </label>
        </div>
        <div className="hover:bg-gray-100 cursor-pointer flex items-center gap-[1.5em] py-[2em] border border-gray-300 rounded-[0.3em] mt-[1em] px-[1em] text-[1.3em]">
          <input
            type="checkbox"
            id="uniform-cpa-examination"
            name="uniform-cpa-examination"
          />
          <label htmlFor="uniform-cpa-examination" className="font-bold">
            Uniform CPA Examination
          </label>
        </div>
      </div>
    </div>
  );
};

export default CertificationsP4;
