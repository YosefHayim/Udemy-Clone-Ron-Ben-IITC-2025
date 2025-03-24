import { IoMdSearch } from "react-icons/io";

const CertificationsP4 = () => {
  return (
    <div className="mb-[2em] ml-[8em] w-[700px] p-[2em] text-start">
      <h1 className="mb-[1em] font-sans text-[1.2em] font-extrabold">
        Are you interested in any certifications?
      </h1>
      <div className="flex w-full  items-center rounded-[0.3em] border border-[#9194ac] bg-white p-[0.5em]">
        <IoMdSearch className="ml-[0.5em] text-[1.5em] text-gray-500" />
        <input
          type="text"
          placeholder="Search for a certification"
          className="w-full border-none bg-white p-[0.8em] font-sans text-black placeholder:font-extrabold placeholder:text-courseNameColorTxt focus:border-purple-800 focus:bg-white focus:text-black focus:outline-none"
        />
      </div>
      <div className="mt-[1em]">
        <b>Popular with learners like you</b>
        <div className="mt-[1em] flex cursor-pointer items-center gap-[1.5em] rounded-[0.3em] border border-gray-300 px-[1em] py-[2em] text-[1.3em] hover:bg-gray-100">
          <input
            type="checkbox"
            id="chartered-financial-Analyst-cfa"
            name="chartered-financial-Analyst-cfa"
          />
          <label
            htmlFor="chartered-financial-Analyst-cfa"
            className="font-sans font-extrabold"
          >
            Chartered Financial Analyst (CFA)
          </label>
        </div>
        <div className="mt-[1em] flex cursor-pointer items-center gap-[1.5em] rounded-[0.3em] border border-gray-300 px-[1em] py-[2em] text-[1.3em] hover:bg-gray-100">
          <input
            type="checkbox"
            id="association-of-chartered-certified-accountants-acca"
            name="association-of-chartered-certified-accountants-acca"
          />
          <label
            htmlFor="association-of-chartered-certified-accountants-acca"
            className="font-sans font-extrabold"
          >
            Association of Chartered Certified Accountants (ACCA)
          </label>
        </div>
        <div className="mt-[1em] flex cursor-pointer items-center gap-[1.5em] rounded-[0.3em] border border-gray-300 px-[1em] py-[2em] text-[1.3em] hover:bg-gray-100">
          <input
            type="checkbox"
            id="uniform-cpa-examination"
            name="uniform-cpa-examination"
          />
          <label
            htmlFor="uniform-cpa-examination"
            className="font-sans font-extrabold"
          >
            Uniform CPA Examination
          </label>
        </div>
      </div>
    </div>
  );
};

export default CertificationsP4;
