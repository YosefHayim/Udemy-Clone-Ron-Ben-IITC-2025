import SideBarProfile from "../ProfilePage/SideBarProfile";

const ProfileMain = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBarProfile />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Public Profile
          </h2>
          <p className="text-gray-600 mb-4">Add information about yourself</p>
          <form className="space-y-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
            </div>

            {/* Headline */}
            <div>
              <label
                htmlFor="headline"
                className="block text-sm font-medium text-gray-700"
              >
                Headline
              </label>
              <input
                id="headline"
                type="text"
                placeholder="A professional headline"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
            </div>

            {/* Bio */}
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <textarea
                id="bio"
                placeholder="A brief bio about yourself"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              ></textarea>
            </div>

            {/* Language */}
            <div>
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700"
              >
                Language
              </label>
              <select
                id="language"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
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
                Links
              </label>
              <div className="space-y-4 mt-2">
                {/* Website */}
                <input
                  type="url"
                  placeholder="Website (http://...)"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                />
                {/* Twitter */}
                <input
                  type="url"
                  placeholder="Twitter Profile"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                />
                {/* Facebook */}
                <input
                  type="url"
                  placeholder="Facebook Profile"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                />
                {/* LinkedIn */}
                <input
                  type="url"
                  placeholder="LinkedIn Profile"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                />
                {/* YouTube */}
                <input
                  type="url"
                  placeholder="YouTube Profile"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
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
