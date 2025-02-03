import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdInsertLink } from "react-icons/md";

const SocialLinks = () => {
  return (
    <div className="text-[#6d28d2] flex flex-col gap-[0.5em] w-full">
      <div className="hover:bg-purpleHoverBtn cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <a href="website" className="flex gap-[0.5em]">
          <MdInsertLink size={20} />
          <b>Website</b>
        </a>
      </div>
      <div className="hover:bg-purpleHoverBtn cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <a href="twitter" className="flex gap-[0.5em]">
          <FaSquareXTwitter size={20} />
          <b>X</b>
        </a>
      </div>
      <div className="hover:bg-purpleHoverBtn cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <a href="facebook" className="flex gap-[0.5em]">
          <FaFacebook size={20} />
          <b>Facebook</b>
        </a>
      </div>
      <div className="hover:bg-purpleHoverBtn cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <a href="linkedin" className="flex gap-[0.5em]">
          <FaLinkedin size={20} />
          <b>Linkedin</b>
        </a>
      </div>
      <div className="hover:bg-purpleHoverBtn cursor-pointer text-center py-[1em] border border-[#6d28d2] rounded-[0.2em] flex flex-row items-center justify-center gap-[0.5em]">
        <a href="youtube" className="flex gap-[0.5em]">
          <FaYoutube size={20} />
          <b>Youtube</b>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
