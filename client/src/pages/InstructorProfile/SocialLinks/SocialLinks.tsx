import { MdInsertLink } from "react-icons/md";

const SocialLinks = () => {
  return (
    <div className="text-[#6d28d2] flex flex-col gap-[0.5em] w-[150px]">
      <div className="cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <MdInsertLink />
        <b>Website</b>
      </div>
      <div className="cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <b>X</b>
      </div>
      <div className="cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <b>Facebook</b>
      </div>
      <div className="cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <b>Linkedin</b>
      </div>
      <div className="cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <b>Youtube</b>
      </div>
    </div>
  );
};

export default SocialLinks;
