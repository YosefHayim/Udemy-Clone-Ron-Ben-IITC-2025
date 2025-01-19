
import SideBarProfile from "../ProfilePage/SideBarProfile";
const ApiClients = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBarProfile />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">API Clients</h2>
          <p className="text-gray-600 mb-6">Create and list your API clients.</p>

          {/* Affiliate API Section */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Affiliate API
            </h3>
            <p className="text-gray-600 mb-4">
              The Udemy Affiliate API exposes functionalities of Udemy to help
              developers build client applications and integrations with Udemy.
              To see more details, please visit{" "}
              <a
                href="#"
                className="text-purple-600 hover:underline"
              >
                Udemy Affiliate API
              </a>
              .
            </p>
            <button
              type="button"
              className="px-6 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Request Affiliate API Client
            </button>
          </div>

          {/* No API Clients Message */}
          <div className="border border-gray-300 bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
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
            <p className="text-gray-600 text-sm">
              You don’t have any API clients yet.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApiClients;
