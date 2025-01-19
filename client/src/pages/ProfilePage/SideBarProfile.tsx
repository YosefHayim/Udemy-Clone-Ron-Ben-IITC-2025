const SideBarProfile = () => {
  return (
    <div className="w-64 bg-white border-l border-b border-t border-gray-300">
      <div className="p-6 ">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-xl">
            BK
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-800">Ben Klinski</h2>
            <a href="#" className="text-indigo-600 text-sm">
              View public profile
            </a>
          </div>
        </div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Photo
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Account Security
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Subscriptions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Payment methods
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Notification Preferences
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              API clients
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              Close account
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBarProfile;
