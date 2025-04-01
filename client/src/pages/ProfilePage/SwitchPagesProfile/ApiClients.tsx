import { Link } from "react-router-dom";
import SideBarProfile from "../SideBarProfile";

const ApiClients = () => {
  return (
    <main className="flex-1 py-4 border-l min-h-screen">
      
      <div className="text-center border-b"> 
        <h2 className="mb-6 font-sans text-2xl font-bold text-gray-800">API Clients</h2>
        <p className="mb-6  -mt-4 text-[1rem] text-gray-700">Create and list your API clients.</p>
      </div>

      {/* Affiliate API Section */}
      <div className="mb-5 mt-4 mx-[9rem]">
        <h3 className="mb-6 text-[2rem] font-semibold text-gray-700">Affiliate API</h3>
        <p className="mb-4  mr-[5rem] text-[1rem] text-gray-800">
          The Udemy Affiliate API exposes functionalities of Udemy to help developers build client
          applications and integrations with Udemy. To see more details, please visit{" "}
          <Link to="#" className="text-[#6d28d2] underline">
            Udemy Affiliate API
          </Link>
          .
        </p>
        <button
          type="button"
          className="rounded-sm text-[0.875rem] font-bold bg-white px-6 py-2 border-[1px] border-[#6d28d2] text-[#6d28d2]  hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Request Affiliate API Client
        </button>
      </div>

      {/* No API Clients Message */}
      <div className="mx-[9rem] flex items-center space-x-4 rounded-2xl border border-gray-300 bg-gray-50 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-[#6d28d2]"
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
        <p className="text-sm text-gray-800 font-bold">You don’t have any API clients yet.</p>
      </div>








    </main>
  );
};

export default ApiClients;
