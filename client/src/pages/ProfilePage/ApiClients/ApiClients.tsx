import { Link } from "react-router-dom";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
const ApiClients = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBarProfile />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">API Clients</h2>
          <p className="mb-6 text-gray-600">
            Create and list your API clients.
          </p>

          {/* Affiliate API Section */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Affiliate API
            </h3>
            <p className="mb-4 text-gray-600">
              The Udemy Affiliate API exposes functionalities of Udemy to help
              developers build client applications and integrations with Udemy.
              To see more details, please visit{" "}
              <Link to="#" className="text-purple-600 hover:underline">
                Udemy Affiliate API
              </Link>
              .
            </p>
            <button
              type="button"
              className="rounded-md bg-purple-600 px-6 py-2 text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Request Affiliate API Client
            </button>
          </div>

          {/* No API Clients Message */}
          <div className="flex items-center space-x-4 rounded-lg border border-gray-300 bg-gray-50 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M12 8v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm text-gray-600">
              You don’t have any API clients yet.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApiClients;
