import { Input } from "@/components/ui/input";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { btnLanguages } from "@/utils/languages";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import updateUserLanguage from "@/api/users/updateUserLanguage";
import { setLanguage } from "@/redux/slices/userSlice";

const ProfileMain = () => {
  const dispatch = useDispatch();
  document.title = "Udemy | Edit profile";
  const MAX_LENGTH = 60;

  const fullName = useSelector((state: RootState) => state?.user?.fullName);
  const headlineFromStore = useSelector(
    (state: RootState) => state?.user.headline,
  );
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
      `Website: ${website}`,
    );
  };

  const [headline, setHeadline] = useState(headlineFromStore || "");
  const [isBoldText, setBoldText] = useState(false);
  const [charsLeft, setCharsLeft] = useState(
    MAX_LENGTH - (headlineFromStore?.length || 0),
  );

  const handleHeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= MAX_LENGTH) {
      setHeadline(inputValue);
      setCharsLeft(MAX_LENGTH - inputValue.length);
    }
  };

  const defaultLanguage = useSelector(
    (state: RootState) => state?.user.language,
  );
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
    <div className="mx-[12rem] mb-[3rem] mt-[1.5rem] flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBarProfile />

      {/* Main Content */}
      <main className="flex-1 border border-gray-300">
        <div className="bg-white">
          <div className="min-w-full border-b border-gray-300 p-4 text-center">
            <h2 className="font-sans text-2xl font-extrabold text-gray-800">
              Public Profile
            </h2>
            <p className="text-courseNameColorTxt">
              Add information about yourself
            </p>
          </div>
          <form className="space-y-6 px-[9rem]" onSubmit={handleSubmit}>
            <div>
              <p className="pb-2 pt-8 font-[lifeLtstd] font-sans font-extrabold">
                Basics:
              </p>
              <Input
                id="fname"
                name="fname"
                type="text"
                placeholder={fullName}
                className="rounded-[0.2rem] border border-gray-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 hover:bg-gray-100"
              />
            </div>
            <div>
              <Input
                id="lname"
                name="lname"
                type="text"
                placeholder="Last Name"
                className="rounded-[0.2rem] border border-gray-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 hover:bg-gray-100"
              />
            </div>
            <div>
              <Input
                id="headline"
                type="text"
                name="headline"
                onChange={handleHeadlineChange}
                value={headline}
                placeholder={"Headline"}
                className="rounded-[0.2rem] border border-gray-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 hover:bg-gray-100"
              />
              <span className="absolute right-[26%] top-[37.5%] font-medium text-gray-500">
                {charsLeft}
              </span>
              <p className=" my-[0.4em] text-gray-600">
                Add a professional headline like "instructor at udemy" or
                "Architect"
              </p>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 rounded-t-[0.2rem] border border-gray-500 bg-white p-2">
                  <button
                    type="button"
                    onClick={() => setBoldText((prev) => !prev)}
                    className={`flex h-8 w-8 items-center justify-center rounded-[0.2rem] text-black text-opacity-80 hover:bg-gray-300 focus:outline-none`}
                  >
                    B
                  </button>
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-[0.2rem] font-sans font-serif font-extrabold italic text-black text-opacity-80 hover:bg-gray-300 focus:outline-none"
                  >
                    I
                  </button>
                </div>
                <textarea
                  id="bio"
                  name="bio"
                  placeholder={bio}
                  rows={4}
                  className={`${
                    isBoldText ? "font-sans font-extrabold" : "font-normal"
                  } w-full border border-t-0 border-gray-500 bg-white hover:bg-gray-100`}
                ></textarea>
              </div>
              <p className=" my-[0.5em] text-gray-600">
                Links and coupon codes are not permitted in this section.
              </p>
              <div>
                <select
                  id="language"
                  name="language"
                  value={chosenLanguage}
                  onChange={(e) => handleChosenLanguage(e.target.value)}
                  className="mb-[1em] w-full cursor-pointer rounded-[0.2rem] border border-gray-500 bg-white p-2 hover:bg-gray-100"
                >
                  {btnLanguages.map(
                    (language: { code: string; name: string }) => (
                      <option key={language.code} value={language.name}>
                        {language.name}
                      </option>
                    ),
                  )}
                </select>
              </div>
              <hr />
            </div>
            <div>
              <b>Links:</b>
              <div className="mt-2 space-y-4">
                <div>
                  <Input
                    type="text"
                    name="website"
                    id="website"
                    placeholder={
                      userLinks.website.length > 1
                        ? userLinks.website
                        : "Website (http(s)://..)"
                    }
                    className="w-full rounded-[0.2rem] border border-gray-500"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <div className="flex h-[35px] w-full flex-row items-center rounded-[0.2rem] border border-gray-400 bg-white">
                    <label
                      htmlFor="twitter"
                      className="flex h-full items-center rounded-l-[0.2rem] border-r border-gray-400 bg-gray-100 px-[0.7em] text-base font-normal text-black"
                    >
                      http://twitter.com/
                    </label>
                    <Input
                      type="text"
                      name="twitter"
                      id="twitter"
                      placeholder={
                        userLinks.xPlatform.length > 1
                          ? userLinks.xPlatform
                          : "Twitter Profile"
                      }
                      className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                    />
                  </div>
                  <p className=" my-[1em] text-gray-600">
                    Add your Twitter username (e.g. johnsmith)
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <div className="flex h-[35px] w-full flex-row items-center rounded-[0.2rem] border border-gray-400 bg-white">
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
                      placeholder={
                        userLinks.facebook.length > 1
                          ? userLinks.facebook
                          : "Username"
                      }
                      className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                    />
                  </div>
                  <p className=" my-[1em] text-gray-600">
                    Input your Facebook username (e.g. johnsmith)
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <div className="flex h-[35px] w-full flex-row items-center rounded-[0.2rem] border border-gray-400 bg-white">
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
                      placeholder={
                        userLinks.linkedin.length > 1
                          ? userLinks.linkedin
                          : "Username"
                      }
                      className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                    />
                  </div>
                  <p className=" my-[1em] text-gray-600">
                    Input your Linkedin username (e.g. johnsmith)
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <div className="flex h-[35px] w-full flex-row items-center rounded-[0.2rem] border border-gray-400 bg-white">
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
                      placeholder={
                        userLinks.youtube.length > 1
                          ? userLinks.youtube
                          : "Username"
                      }
                      className="h-full w-full rounded-l-none   rounded-r-[0.2rem] bg-white outline-none placeholder:font-medium placeholder:text-gray-500"
                    />
                  </div>
                  <p className=" mt-[0.5em] text-gray-600">
                    Input your YouTube username (e.g. johnsmith)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-start">
              <Button
                type="submit"
                className="mb-[1em] rounded-[0.2rem] bg-btnColor px-4 font-[lifeLtstd] font-sans text-sm font-extrabold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfileMain;
