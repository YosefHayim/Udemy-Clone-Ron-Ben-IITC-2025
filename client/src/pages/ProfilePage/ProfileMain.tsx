import SideBarProfile from "../ProfilePage/SideBarProfile";

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
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="bg-white mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
            </div>

            {/* Last Name */}
            <div>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="bg-white  mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
            </div>

            {/* Headline */}
            <div>
              <input
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
                className="bg-white  mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              ></textarea>
            </div>

            {/* Language */}
            <div>
              <select
                id="language"
                className="bg-white  mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
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
                {/* Website */}
                <input
                  type="url"
                  placeholder="Website (http://...)"
                  className="bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                />
                {/* Twitter */}
                <input
                  type="url"
                  placeholder="Twitter Profile"
                  className="bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                />
                {/* Facebook */}
                <input
                  type="url"
                  placeholder="Facebook Profile"
                  className="bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                />
                {/* LinkedIn */}
                <input
                  type="url"
                  placeholder="LinkedIn Profile"
                  className="bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                />
                {/* YouTube */}
                <input
                  type="url"
                  placeholder="YouTube Profile"
                  className="bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfileMain;
