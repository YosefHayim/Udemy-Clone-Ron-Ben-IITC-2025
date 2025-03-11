import { Input } from "@/components/ui/input";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { useState } from "react";
import { btnLanguages } from "@/utils/languages";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import updateUserLanguage from "@/api/users/updateUserLanguage";
import { setLanguage } from "@/redux/slices/userSlice";

const ProfileMain = () => {
  document.title = "Udemy | Edit profile";
  const MAX_LENGTH = 60;

  const fullName = useSelector((state: RootState) => state.user.fullName);
  const headlineFromStore = useSelector(
    (state: RootState) => state.user.headline
  );
  const userLinks = useSelector((state: RootState) => state.user.userLinks);
  const bio = useSelector((state: RootState) => state.user.bio);

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
  const [charsLeft, setCharsLeft] = useState(
    MAX_LENGTH - (headlineFromStore?.length || 0)
  );

  const handleHeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= MAX_LENGTH) {
      setHeadline(inputValue);
      setCharsLeft(MAX_LENGTH - inputValue.length);
    }
  };

  const dispatch = useDispatch();

  const defaultLanguage = useSelector(
    (state: RootState) => state.user.language
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
    <div className="flex min-h-screen bg-gray-100 mx-[12rem] mt-[1.5rem] mb-[3rem]">
      {/* Sidebar */}
      <SideBarProfile />

      {/* Main Content */}
      <main className="flex-1 border border-gray-300">
        <div className="bg-white">
          <div className="border-b border-gray-300 min-w-full text-center p-4">
            <h2 className="text-2xl font-bold text-gray-800">Public Profile</h2>
            <p className="text-courseNameColorTxt">
              Add information about yourself
            </p>
          </div>
          <form className="space-y-6 px-[9rem]" onSubmit={handleSubmit}>
            <div>
              <p className="font-sans font-bold pb-2 pt-8">Basics:</p>
              <Input
                id="fname"
                name="fname"
                type="text"
                placeholder={fullName}
                className="hover:bg-gray-100 rounded-[0.2rem] border border-gray-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500"
              />
            </div>
            <div>
              <Input
                id="lname"
                name="lname"
                type="text"
                placeholder="Last Name"
                className="hover:bg-gray-100 rounded-[0.2rem] border border-gray-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500"
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
                className="hover:bg-gray-100 rounded-[0.2rem] border border-gray-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500"
              />
              <span className="absolute right-[26%] top-[37.5%] font-medium text-gray-500">
                {charsLeft}
              </span>
              <p className=" text-gray-600 my-[0.4em]">
                Add a professional headline like "instructor at udemy" or
                "Architect"
              </p>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 border border-gray-500 rounded-t-[0.2rem] bg-white p-2">
                  <button
                    type="button"
                    onClick={() => setBoldText((prev) => !prev)}
                    className={`focus:outline-none text-opacity-80 flex items-center justify-center w-8 h-8 rounded-[0.2rem] text-black hover:bg-gray-300`}
                  >
                    B
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none font-serif text-opacity-80 flex items-center justify-center w-8 h-8 rounded-[0.2rem] font-bold italic text-black hover:bg-gray-300"
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
                    isBoldText ? "font-bold" : "font-normal"
                  } hover:bg-gray-100 border border-gray-500 border-t-0 w-full bg-white`}
                ></textarea>
              </div>
              <p className=" text-gray-600 my-[0.5em]">
                Links and coupon codes are not permitted in this section.
              </p>
              <div>
                <select
                  id="language"
                  name="language"
                  value={chosenLanguage}
                  onChange={(e) => handleChosenLanguage(e.target.value)}
                  className="cursor-pointer hover:bg-gray-100 rounded-[0.2rem] border border-gray-500 mb-[1em] w-full bg-white p-2"
                >
                  {btnLanguages.map(
                    (language: { code: string; name: string }) => (
                      <option key={language.code} value={language.name}>
                        {language.name}
                      </option>
                    )
                  )}
                </select>
              </div>
              <hr />
            </div>
            <div>
              <b>Links:</b>
              <div className="space-y-4 mt-2">
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
                    className="rounded-[0.2rem] border border-gray-500 w-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center w-full border border-gray-400 bg-white h-[35px] rounded-[0.2rem]">
                    <label
                      htmlFor="twitter"
                      className="px-[0.7em] text-black font-normal text-base bg-gray-100 h-full flex items-center border-r border-gray-400 rounded-l-[0.2rem]"
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
                      className="h-full w-full bg-white   placeholder:text-gray-500 placeholder:font-medium outline-none rounded-l-none rounded-r-[0.2rem]"
                    />
                  </div>
                  <p className=" text-gray-600 my-[1em]">
                    Add your Twitter username (e.g. johnsmith)
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center w-full border border-gray-400 bg-white h-[35px] rounded-[0.2rem]">
                    <label
                      htmlFor="facebook"
                      className="px-[0.7em] text-black font-normal text-base bg-gray-100 h-full flex items-center border-r border-gray-400 rounded-l-[0.2rem]"
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
                      className="h-full w-full bg-white   placeholder:text-gray-500 placeholder:font-medium outline-none rounded-l-none rounded-r-[0.2rem]"
                    />
                  </div>
                  <p className=" text-gray-600 my-[1em]">
                    Input your Facebook username (e.g. johnsmith)
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center w-full border border-gray-400 bg-white h-[35px] rounded-[0.2rem]">
                    <label
                      htmlFor="linkedin"
                      className="px-[0.7em] text-black font-normal text-base bg-gray-100 h-full flex items-center border-r border-gray-400 rounded-l-[0.2rem]"
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
                      className="h-full w-full bg-white   placeholder:text-gray-500 placeholder:font-medium outline-none rounded-l-none rounded-r-[0.2rem]"
                    />
                  </div>
                  <p className=" text-gray-600 my-[1em]">
                    Input your Linkedin username (e.g. johnsmith)
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center w-full border border-gray-400 bg-white h-[35px] rounded-[0.2rem]">
                    <label
                      htmlFor="youtube"
                      className="px-[0.7em] text-black font-normal text-base bg-gray-100 h-full flex items-center border-r border-gray-400 rounded-l-[0.2rem]"
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
                      className="h-full w-full bg-white   placeholder:text-gray-500 placeholder:font-medium outline-none rounded-l-none rounded-r-[0.2rem]"
                    />
                  </div>
                  <p className=" text-gray-600 mt-[0.5em]">
                    Input your YouTube username (e.g. johnsmith)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start w-full">
              <Button
                type="submit"
                className="mb-[1em] font-bold transition duration-150 text-sm font-Sans bg-btnColor hover:bg-[#892DE1] text-white rounded-[0.2rem] px-4 focus:outline-none"
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
