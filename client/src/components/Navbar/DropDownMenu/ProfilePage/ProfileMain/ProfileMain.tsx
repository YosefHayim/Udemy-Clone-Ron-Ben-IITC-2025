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
  console.log(userLinks);

  const bio = useSelector((state: RootState) => state.user.bio);

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

          <form className="space-y-6 px-[9rem]">
            {/* First Name */}
            <div>
              <p className="font-sans font-bold text-[1rem] pb-2 pt-8">
                Basics:
              </p>
              <Input
                id="firstName"
                type="text"
                placeholder={fullName}
                className="border border-gray-500 rounded-[0.2rem]"
              />
            </div>

            {/* Last Name */}
            <div>
              <Input
                id="lastName"
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
                  className="rounded-[0.2rem] border border-gray-500 mb-[1em] w-full bg-white p-2"
                >
                  <option value="en">English (US)</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="pt">Portuguese</option>
                </select>
              </div>
              <hr />
            </div>

            {/* Links */}
            <div>
              <label className="block text-sm font-medium">Links:</label>
              <div className="space-y-4 mt-2">
                {/* Website */}
                <div>
                  <Input
                    type="url"
                    placeholder="Website (http://...)"
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
                      type="url"
                      name="twitter"
                      placeholder="Twitter Profile"
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
                      type="url"
                      name="facebook"
                      placeholder="Facebook Profile"
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
                      type="url"
                      name="linkedin"
                      placeholder="Linkedin Profile"
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
                      type="url"
                      name="youtube"
                      placeholder="YouTube Profile"
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
                className="mb-[1em] font-bold transition duration-150 text-sm font-Sans py-[1.21rem] bg-[#6D28D2] hover:bg-[#892DE1] text-white rounded-[0.2rem] px-4 focus:outline-none"
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
