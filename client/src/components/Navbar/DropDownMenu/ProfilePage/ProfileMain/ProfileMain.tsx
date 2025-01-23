import { Input } from "@/components/ui/input";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

const ProfileMain = () => {
  document.title = "Udemy | Edit profile";
  const fullName = useSelector((state) => state.user.fullName);

  return (
    <div className="flex min-h-screen bg-gray-100 mx-[6rem] mt-[1.5rem] mb-[3rem]">
      {/* Sidebar */}
      <SideBarProfile />

      {/* Main Content */}
      <main className="flex-1  border border-gray-300 ">
        <div className="bg-white">
          <div className="border-b border-gray-300 min-w-full text-center p-4">
            <h2 className="text-2xl font-bold text-gray-800">Public Profile</h2>
            <p className="text-gray-600">Add information about yourself</p>
          </div>

          <form className="space-y-6 px-8">
            {/* First Name */}
            <div>
              <p className="font-sans font-bold text-[1rem] pb-2 pt-8">
                Basics:
              </p>
              <Input
                id="firstName"
                type="text"
                placeholder={fullName || "First Name"}
                className="rounded-[0em] border border-gray-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <Input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="rounded-[0em] border border-gray-400"
              />
            </div>

            {/* Headline */}
            <div>
              <Input
                id="headline"
                type="text"
                placeholder="Headline"
                className="rounded-[0em] border border-gray-400"
              />
              <p className="text-[0.8em] text-gray-600">
                Add a professional headline like "instructor at udemy" or
                "Architect"
              </p>
            </div>

            {/* Bio */}
            <div>
              <textarea
                id="bio"
                placeholder="A brief bio about yourself"
                rows={4}
                className="rounded-[0em] border border-gray-400"
              ></textarea>
              <p className="text-[0.8em] text-gray-600 mb-[1em]">
                Links and coupon codes are not permitted in this section.
              </p>
              {/* Language */}
              <div>
                <select
                  id="language"
                  className="rounded-[0em] border border-gray-400 mb-[1em]"
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
                <div>
                  {/* Website */}
                  <Input
                    type="url"
                    placeholder="Website (http://...)"
                    className="rounded-[0em] border-black"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-center w-full border-b border-gray-600">
                    <label htmlFor="twitter" className="bg-gray-100 p-[0.7em]">
                      http://twitter.com/
                    </label>
                    <Input
                      type="url"
                      name="twitter"
                      placeholder="Twitter Profile"
                      className="rounded-[0em] border-t border-l border-gray-600 border-b-0 placeholder:text-[#9194AC]"
                    />
                  </div>
                  <p className="text-[0.8em] text-gray-600 mb-[1em]">
                    Add your twitter username (e.g. johnsmith)
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-center w-full border-b border-gray-600">
                    <label htmlFor="facebook" className="bg-gray-100 p-[0.7em]">
                      http://www.facebook.com/
                    </label>
                    <Input
                      type="url"
                      name="facebook"
                      placeholder="Facebook Profile"
                      className="rounded-[0em] border-t border-l border-gray-600 border-b-0 placeholder:text-[#9194AC]"
                    />
                  </div>
                  <p className="text-[0.8em] text-gray-600 mb-[1em]">
                    input your Facebook username (e.g. johnsmith)
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-center w-full border-b border-gray-600">
                    <label htmlFor="linkedin" className="bg-gray-100 p-[0.7em]">
                      http://www.Linkedin.com/
                    </label>
                    <Input
                      type="url"
                      name="linkedin"
                      placeholder="Linkedin Profile"
                      className="rounded-[0em] border-t border-l border-gray-600 border-b-0 placeholder:text-[#9194AC]"
                    />
                  </div>
                  <p className="text-[0.8em] text-gray-600 mb-[1em]">
                    input your linkedin username (e.g. johnsmith)
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-center w-full border-b border-gray-600">
                    <label htmlFor="youtube" className="bg-gray-100 p-[0.7em]">
                      http://www.youtube.com/
                    </label>
                    <Input
                      type="url"
                      name="youtube"
                      placeholder="Youtube Profile"
                      className="rounded-[0em] border-t border-l border-gray-600 border-b-0 placeholder:text-[#9194AC]"
                    />
                  </div>
                  <p className="text-[0.8em] text-gray-600 mb-[1em]">
                    input your Youtube username (e.g. johnsmith)
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
