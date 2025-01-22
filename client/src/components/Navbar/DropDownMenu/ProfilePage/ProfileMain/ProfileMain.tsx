import { Input } from "@/components/ui/input";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { Button } from "@/components/ui/button";

const ProfileMain = () => {
  document.title = "Udemy | Edit profile";
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
                placeholder="First Name"
                className="rounded-[0.2em] border border-gray-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <Input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="rounded-[0.2em] border border-gray-400"
              />
            </div>

            {/* Headline */}
            <div>
              <Input
                id="headline"
                type="text"
                placeholder="A professional headline"
                className="bg-white mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
            </div>

            {/* Bio */}
            <div>
              <textarea
                id="bio"
                placeholder="A brief bio about yourself"
                rows={4}
                className="rounded-[0.2em] border border-gray-400"
              ></textarea>
            </div>

            {/* Language */}
            <div>
              <select
                id="language"
                className="rounded-[0.2em] border border-gray-400"
              >
                <option value="en">English (US)</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="pt">Portuguese</option>
              </select>
            </div>

            {/* Links */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Links:
              </label>
              <div className="space-y-4 mt-2">
                <div>
                  {/* Website */}
                  <Input
                    type="url"
                    placeholder="Website (http://...)"
                    className="rounded-[0.2em] border border-gray-400"
                  />
                </div>
                <div>
                  {/* Twitter */}
                  <Input
                    type="url"
                    placeholder="Twitter Profile"
                    className="rounded-[0.2em] border border-gray-400"
                  />
                  <p className="text-[0.8em] text-gray-600">
                    Add your twitter username (e.g. johnsmith)
                  </p>
                </div>
                <div>
                  {/* Facebook */}
                  <Input
                    type="url"
                    placeholder="Facebook Profile"
                    className="rounded-[0.2em] border border-gray-400"
                  />
                  <p className="text-[0.8em] text-gray-600">
                    Add your twitter username (e.g. johnsmith)
                  </p>
                </div>
                <div>
                  {/* LinkedIn */}
                  <Input
                    type="url"
                    placeholder="LinkedIn Profile"
                    className="rounded-[0.2em] border border-gray-400"
                  />
                  <p className="text-[0.8em] text-gray-600">
                    Add your twitter username (e.g. johnsmith)
                  </p>
                </div>
                <div>
                  {/* YouTube */}
                  <Input
                    type="url"
                    placeholder="YouTube Profile"
                    className="rounded-[0.2em] border border-gray-400"
                  />
                  <p className="text-[0.8em] text-gray-600">
                    Add your twitter username (e.g. johnsmith)
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
