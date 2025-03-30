import { Input } from "@/components/ui/input";
import SideBarProfile from "../SideBarProfile";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { btnLanguages } from "@/utils/languages";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import updateUserLanguage from "@/api/users/updateUserLanguage";
import { setLanguage } from "@/redux/slices/userSlice";
import { regInputFill } from "@/utils/stylesStorage";

const ProfileMain = () => {
  const dispatch = useDispatch();
  document.title = "Udemy | Edit profile";
  const MAX_LENGTH = 60;

  const fullName = useSelector((state: RootState) => state?.user?.fullName);
  const [firstName, ...rest] = fullName?.split(" ") || [];
  const lastName = rest.join(" ");
  const headlineFromStore = useSelector((state: RootState) => state?.user.headline);
  const userLinks = useSelector((state: RootState) => state?.user?.userLinks);
  const bio = useSelector((state: RootState) => state?.user?.bio);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fName = formData.get("fname");
    const lName = formData.get("lname");
    const languageChosen = formData.get("language");
    const headline = formData.get("headline");
    const xPlatform = formData.get("twitter");
    const linkedin = formData.get("linkedin");
    const youtube = formData.get("youtube");
    const facebook = formData.get("facebook");
    const website = formData.get("website");
    const bio = formData.get("bio");

    console.log(
      `Language chosen: ${languageChosen}`,
      `First name: ${fName}`,
      `Last name: ${lName}`,
      `Headline: ${headline}`,
      `Twitter: ${xPlatform}`,
      `LinkedIn: ${linkedin}`,
      `YouTube: ${youtube}`,
      `Facebook: ${facebook}`,
      `Bio: ${bio}`,
      `Website: ${website}`
    );
  };

  const [headline, setHeadline] = useState(headlineFromStore || "");
  const [isBoldText, setBoldText] = useState(false);
  const [charsLeft, setCharsLeft] = useState(MAX_LENGTH - (headlineFromStore?.length || 0));

  const handleHeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= MAX_LENGTH) {
      setHeadline(inputValue);
      setCharsLeft(MAX_LENGTH - inputValue.length);
    }
  };

  const defaultLanguage = useSelector((state: RootState) => state?.user.language);
  const [chosenLanguage, setChosenLanguage] = useState(defaultLanguage);

  const postUserLanguage = useMutation({
    mutationFn: updateUserLanguage,
  });

  const handleChosenLanguage = (language: string) => {
    dispatch(setLanguage(language));
    setChosenLanguage(language);
    postUserLanguage.mutate(language);
  };

  return (
    <main className="border-l border-gray-300">
      <div className="bg-white">

        {/* title  */}
        <div className="min-w-full border-b border-gray-300 p-4 text-center">
          <h2 className="font-sans text-2xl font-extrabold text-gray-800">Public Profile</h2>
          <p className="text-courseNameColorTxt py-2 text-[1rem]">Add information about yourself</p>
        </div>

        {/* main content */}
        <div className="px-32 flex-col mt-6">
          <b className="font-semibold text-[0.9rem]"> Basics: </b>
          {/* First Name, Last name and Headline */}
          <div className="flex flex-col space-y-4 mb-4 mt-2">
            <Input
              id="fname"
              name="fname"
              type="text"
              placeholder={firstName || "First Name"}
              className={`${regInputFill} rounded-sm py-4`}
              style={{ paddingTop: "1.2rem", paddingBottom: "1.2rem" }}
            />
            <Input
              id="lname"
              name="lname"
              type="text"
              placeholder={lastName || "Last Name"}
              className={`${regInputFill} rounded-sm`}
              style={{ paddingTop: "1.2rem", paddingBottom: "1.2rem" }}
            />
            {/* Headline */}
            <div className="relative">
              <Input
                id="headline"
                type="text"
                name="headline"
                onChange={handleHeadlineChange}
                value={headline}
                placeholder="Headline"
                className={`${regInputFill} w-full rounded-sm border border-gray-400 px-4 py-2 pr-10 placeholder:text-gray-500`}
                style={{ paddingTop: "1.2rem", paddingBottom: "1.2rem" }}
              />
              {/* Characters counter in the right side */}
              <span className="absolute right-4 top-[30%] -translate-y-1/2 text-[1rem] font-semibold text-gray-500 opacity-90">
                {charsLeft}
              </span>
              {/* Texto explicativo abaixo */}
              <p className="mt-2 text-[0.74rem] text-gray-600">
                Add a professional headline like, "Instructor at Udemy" or "Architect."
              </p>
            </div>
          </div>


          <div className="flex flex-col">
            <div className="flex items-center space-x-2 rounded-t-[0.2rem] border border-gray-500 bg-white p-2">
              <button
                type="button"
                onClick={() => setBoldText((prev) => !prev)}
                className={`flex h-8 w-8 items-center text-[1rem] font-bold justify-center rounded-[0.2rem] text-black text-opacity-80 hover:bg-gray-300 focus:outline-none`}
              >
                B
              </button>
              <button
                type="button"
                className="flex h-8 w-8 items-center text-[1rem]  justify-center rounded-[0.2rem]  font-serif font-black italic text-black text-opacity-80 hover:bg-gray-300 focus:outline-none"
              >
                I
              </button>
            </div>

            <textarea
              id="bio"
              name="bio"
              placeholder={bio}
              rows={4}
              className={`${isBoldText ? "font-sans font-extrabold" : "font-normal"
                } w-full border border-t-0 border-gray-500 bg-white hover:bg-gray-100`}
            ></textarea>

            <p className=" my-[0.5em] text-gray-600">
              Links and coupon codes are not permitted in this section.
            </p>
          </div>

          <select
            id="language"
            name="language"
            value={chosenLanguage}
            onChange={(e) => handleChosenLanguage(e.target.value)}
            className="mt-[1.2em] mb-[1.5rem] text-[0.875rem] text-gray-600 w-full cursor-pointer rounded-[0.2rem] border border-gray-500 bg-white p-2 hover:bg-white"
            style={{ paddingTop: "0.8rem", paddingBottom: "0.8rem" }}
          >
            <option value="" disabled className="text-gray-700 ">
              – – Select Language – –
            </option>
            {btnLanguages.map((language: { code: string; name: string }) => (
              <option key={language.code} value={language.name}>
                {language.name}
              </option>
            ))}
          </select>

          <hr />

          <form className="mt-5">
            <b className="font-semibold text-[0.9rem]" >Links:</b>
            <div className="mt-2 space-y-4">
              
              <div>
                <Input
                  type="text"
                  name="website"
                  id="website"
                  placeholder={userLinks.website.length > 1 ? userLinks.website : "Website (http(s)://..)"}
                  className="w-full rounded-[0.2rem] border border-gray-500"
                  style={{ paddingTop: "1.2rem", paddingBottom: "1.2rem" }}
                />
              </div>

              {/* Facebook  */}
              <div className="flex w-full flex-col items-start justify-start">
                <div className="flex h-[45px] w-full  items-center rounded-[0.2rem] border border-gray-400 bg-white">
                  <label
                    htmlFor="facebook"
                    className="flex h-full items-center rounded-l-[0.2rem] border-r border-gray-400 bg-gray-100 px-[0.7em] text-base font-normal text-black"
                  >
                    http://www.facebook.com/
                  </label>
                  <Input
                    type="text"
                    name="facebook"
                    id="facebook"
                    placeholder={userLinks.facebook.length > 1 ? userLinks.facebook : "Username"}
                    className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                  />
                </div>
                <p className=" my-[1em] text-gray-600">
                  Input your Facebook username (e.g. johnsmith)
                </p>
              </div>

              {/* Instagram  */}
              <div className="flex w-full flex-col items-start justify-start">
                <div className="flex h-[45px] w-full  items-center rounded-[0.2rem] border border-gray-400 bg-white">
                  <label
                    htmlFor="facebook"
                    className="flex h-full items-center rounded-l-[0.2rem] border-r border-gray-400 bg-gray-100 px-[0.7em] text-base font-normal text-black"
                  >
                    https://www.instagram.com/
                  </label>
                  <Input
                    type="text"
                    name="instagram"
                    id="instagram"
                    placeholder={userLinks.facebook.length > 1 ? userLinks.facebook : "Username"}
                    className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                  />
                </div>
                <p className=" my-[1em] text-gray-600">
                  Input your Facebook username (e.g. johnsmith)
                </p>
              </div>

              {/* Linkedin  */}
              <div className="flex w-full flex-col items-start justify-start">
                <div className="flex h-[45px] w-full  items-center rounded-[0.2rem] border border-gray-400 bg-white">
                  <label
                    htmlFor="linkedin"
                    className="flex h-full items-center rounded-l-[0.2rem] border-r border-gray-400 bg-gray-100 px-[0.7em] text-base font-normal text-black"
                  >
                    http://www.linkedin.com/
                  </label>
                  <Input
                    type="text"
                    name="linkedin"
                    id="linkedin"
                    placeholder={userLinks.linkedin.length > 1 ? userLinks.linkedin : "Public Profile URL"}
                    className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                  />
                </div>
                <p className=" my-[1em] text-gray-600">
                  Input your Linkedin username (e.g. johnsmith)
                </p>
              </div>

              {/* Tik-Tok  */}
              <div className="flex w-full flex-col items-start justify-start">
                <div className="flex h-[45px] w-full  items-center rounded-[0.2rem] border border-gray-400 bg-white">
                  <label
                    htmlFor="linkedin"
                    className="flex h-full items-center rounded-l-[0.2rem] border-r border-gray-400 bg-gray-100 px-[0.7em] text-base font-normal text-black"
                  >
                    https://www.tiktok.com/
                  </label>
                  <Input
                    type="text"
                    name="tiktok"
                    id="tiktok"
                    placeholder={userLinks.linkedin.length > 1 ? userLinks.linkedin : "@Username"}
                    className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                  />
                </div>
                <p className=" my-[1em] text-gray-600">
                  Input your Youtube username (e.g. johnsmith)
                </p>
              </div>

              {/* X */}
              <div className="flex w-full flex-col items-start justify-start">
                <div className="flex h-[45px] w-full  items-center rounded-[0.2rem] border border-gray-400 bg-white">
                  <label
                    htmlFor="X"
                    className="flex h-full items-center rounded-l-[0.2rem] border-r border-gray-400 bg-gray-100 px-[0.7em] text-base font-normal text-black"
                  >
                    https://x.com/
                  </label>
                  <Input
                    type="text"
                    name="X"
                    id="X"
                    placeholder={userLinks.xPlatform.length > 1 ? userLinks.xPlatform : "Username"}
                    className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                  />
                </div>
                <p className=" my-[1em] text-gray-600">Add your X username (e.g. johnsmith)</p>
              </div>


              {/* Youtube */}
              <div className="flex w-full flex-col items-start justify-start">
                <div className="flex h-[45px] w-full  items-center rounded-[0.2rem] border border-gray-400 bg-white">
                  <label
                    htmlFor="youtube"
                    className="flex h-full items-center rounded-l-[0.2rem] border-r border-gray-400 bg-gray-100 px-[0.7em] text-base font-normal text-black"
                  >
                    http://www.youtube.com/
                  </label>
                  <Input
                    type="text"
                    id="youtube"
                    name="youtube"
                    placeholder={userLinks.youtube.length > 1 ? userLinks.youtube : "Username"}
                    className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                  />
                </div>
                <p className=" mt-[0.5em] text-gray-600">
                  Input your YouTube username (e.g. johnsmith)
                </p>
              </div>

            </div>
            <div className="flex w-full justify-start">
              <Button
                type="submit"
                className="my-[2em] text-[1.1rem] rounded-[0.2rem] bg-btnColor px-4 font-mono font-extrabold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none"
              >
                Save
              </Button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
};

export default ProfileMain;
