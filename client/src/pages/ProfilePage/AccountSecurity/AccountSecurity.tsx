import { Link } from "react-router-dom";
import SideBarProfile from "../SideBarProfile/SideBarProfile"; // Importando o componente da Sidebar

const AccountSecurity = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBarProfile />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Account</h2>
          <p className="text-gray-600 mb-4">
            Edit your account settings and change your password here.
          </p>

          {/* Email Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email:
            </label>
            <div className="flex items-center justify-between border rounded-md px-4 py-2 bg-gray-50">
              <span className="text-gray-700">ben.klinski@gmail.com</span>
              <button className="focus:outline-none text-purple-600 hover:text-purple-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l2.651 2.651m-2.651-2.651a2.248 2.248 0 113.182 3.182l-9.193 9.192a4.5 4.5 0 01-1.939 1.131l-3.24.926.926-3.24a4.5 4.5 0 011.13-1.94l9.194-9.192zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Change Password:
            </label>
            <form className="space-y-4">
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
              <input
                type="password"
                placeholder="Re-type new password"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Change password
              </button>
            </form>
          </div>

          {/* Multi-Factor Authentication Section */}
          <div className="mb-6 bg-gray-50 border rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Multi-factor Authentication
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Increase your account security by requiring that a code emailed to
              you be entered when you log in. For more information on how
              multi-factor authentication works, refer to our{" "}
              <Link to="#" className="text-purple-600 hover:text-purple-800">
                Help Center article
              </Link>
              .
            </p>
            <button
              type="button"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Enable
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountSecurity;
