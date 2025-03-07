import { Input } from "@/components/ui/input";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

const ProfileMain = () => {
  document.title = "Udemy | Edit profile";
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const headline = useSelector((state: RootState) => state.user.headline);
  const userLinks = useSelector((state: RootState) => state.user.userLinks);
  const bio = useSelector((state: RootState) => state.user.bio);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fName = formData.get("fname");
    const lName = formData.get("lname");
    const headline = formData.get("headline");
    const xPlatform = formData.get("xplatform");
    const linkedin = formData.get("linkedin");
    const youtube = formData.get("youtube");
    const facebook = formData.get("facebook");
    const website = formData.get("website");
    const bio = formData.get("bio");
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
            <p className="text-courseNameColorTxt text-[1rem]">
              Add information about yourself
            </p>
          </div>
          <form className="space-y-6 px-[9rem]" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <p className="font-sans font-bold text-[1rem] pb-2 pt-8">
                Basics:
              </p>
              <Input
                id="fname"
                name="fname"
                type="text"
                placeholder={fullName}
                className="border border-gray-500 rounded-[0.2rem]"
              />
            </div>
            {/* Last Name */}
            <div>
              <Input
                id="lname"
                name="lname"
                type="text"
                placeholder="Last Name"
                className="rounded-[0.2rem] border border-gray-500"
              />
            </div>
            {/* Headline */}
            <div>
              <Input
                id="headline"
                type="text"
                name=""
                placeholder={headline}
                className="rounded-[0.2rem] border border-gray-500"
              />
              <p className="text-[0.8em] text-gray-600">
                Add a professional headline like "instructor at udemy" or
                "Architect"
              </p>
            </div>
            <div>
              {/* Botões de Estilo e Textarea */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 border border-gray-500 rounded-t-[0.2rem] bg-white p-2">
                  {/* Button "B" */}
                  <button
                    type="button"
                    className="text-[1.1rem]  font-seriftext-opacity-80 flex items-center justify-center w-8 h-8 rounded-[0.2rem] font-bold text-black hover:bg-gray-300"
                  >
                    B
                  </button>
                  {/* Button "I" */}
                  <button
                    type="button"
                    className="text-[1.1rem] font-serif text-opacity-80 flex items-center justify-center w-8 h-8 rounded-[0.2rem] font-bold italic text-black hover:bg-gray-300"
                  >
                    I
                  </button>
                </div>
                <textarea
                  id="bio"
                  placeholder={bio}
                  rows={4}
                  className="border border-gray-500 border-t-0 rounded-b-[0.2rem] w-full bg-white p-2"
                ></textarea>
              </div>
              {/* Informação adicional */}
              <p className="text-[0.8em] text-gray-600 mb-[1em]">
                Links and coupon codes are not permitted in this section.
              </p>
              {/* Seleção de Idioma */}
              <div>
                <select
                  id="language"
                  name="language"
                  className="rounded-[0.2rem] border border-gray-500 mb-[1em] w-full bg-white p-2"
                >
                  <option value="en" id="en">
                    English (US)
                  </option>
                  <option value="es" id="es">
                    Spanish
                  </option>
                  <option value="fr" id="fr">
                    French
                  </option>
                  <option value="pt" id="pt">
                    Portuguese
                  </option>
                </select>
              </div>
              <hr />
            </div>
            {/* Links */}
            <div>
              <label className="block text-sm font-medium">Website:</label>
              <div className="space-y-4 mt-2">
                {/* Website */}
                <div>
                  <Input
                    type="text"
                    name="website"
                    id="website"
                    placeholder={
                      userLinks.website.length > 1 ? userLinks.website : "Url"
                    }
                    className="rounded-[0.2rem] border border-gray-500 w-full"
                  />
                </div>
                {/* Twitter */}
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center w-full border border-gray-400 bg-white h-[50px] rounded-[0.2rem]">
                    <label
                      htmlFor="twitter"
                      className="px-[0.7em] text-black font-normal text-base bg-gray-100 h-full flex items-center border-r border-gray-400 rounded-l-[0.2rem]"
                    >
                      http://twitter.com/
                    </label>
                    <Input
                      type="text"
                      name="xplatform"
                      id="xplatform"
                      placeholder={
                        userLinks.xPlatform.length > 1
                          ? userLinks.xPlatform
                          : "Username"
                      }
                      className="h-full w-full bg-white placeholder:text-base placeholder:text-gray-500 placeholder:font-medium outline-none rounded-l-none rounded-r-[0.2rem]"
                    />
                  </div>
                  <p className="text-[0.8em] text-gray-600 my-[1em]">
                    Add your Twitter username (e.g. johnsmith)
                  </p>
                </div>
                {/* Facebook */}
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center w-full border border-gray-400 bg-white h-[50px] rounded-[0.2rem]">
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
                      className="h-full w-full bg-white placeholder:text-base placeholder:text-gray-500 placeholder:font-medium outline-none rounded-l-none rounded-r-[0.2rem]"
                    />
                  </div>
                  <p className="text-[0.8em] text-gray-600 my-[1em]">
                    Input your Facebook username (e.g. johnsmith)
                  </p>
                </div>
                {/* Linkedin */}
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center w-full border border-gray-400 bg-white h-[50px] rounded-[0.2rem]">
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
                      className="h-full w-full bg-white placeholder:text-base placeholder:text-gray-500 placeholder:font-medium outline-none rounded-l-none rounded-r-[0.2rem]"
                    />
                  </div>
                  <p className="text-[0.8em] text-gray-600 my-[1em]">
                    Input your Linkedin username (e.g. johnsmith)
                  </p>
                </div>
                {/* YouTube */}
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center w-full border border-gray-400 bg-white h-[50px] rounded-[0.2rem]">
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
                      className="h-full w-full bg-white placeholder:text-base placeholder:text-gray-500 placeholder:font-medium outline-none rounded-l-none rounded-r-[0.2rem]"
                    />
                  </div>
                  <p className="text-[0.8em] text-gray-600 my-[1em]">
                    Input your YouTube username (e.g. johnsmith)
                  </p>
                </div>
              </div>
            </div>
            {/* Save Button */}
            <div className="flex justify-start w-full">
              <Button
                type="submit"
                className="mb-[1em] font-bold transition duration-150 text-sm font-Sans py-[1.21rem] bg-btnColor hover:bg-[#892DE1] text-white rounded-[0.2rem] px-4 focus:outline-none"
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
