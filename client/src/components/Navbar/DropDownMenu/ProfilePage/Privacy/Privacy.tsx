import { useState } from "react";
import SideBarProfile from "../SideBarProfile/SideBarProfile"; // Importando o componente da Sidebar

const Privacy = () => {
  // Estados para as configurações de privacidade
  const [showProfile, setShowProfile] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  // Função para salvar as alterações (simulação)
  const handleSave = () => {
    alert("Privacy settings saved!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBarProfile />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy</h2>
          <p className="text-gray-600 mb-4">
            Modify your privacy settings here.
          </p>

          {/* Profile Page Settings */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Profile page settings
            </h3>
            <div className="space-y-4">
              {/* Option 1 */}
              <div className="flex items-center">
                <input
                  id="showProfile"
                  type="checkbox"
                  checked={showProfile}
                  onChange={() => setShowProfile(!showProfile)}
                  className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="showProfile"
                  className="ml-3 text-gray-700 text-sm"
                >
                  Show your profile to logged-in users
                </label>
              </div>

              {/* Option 2 */}
              <div className="flex items-center">
                <input
                  id="showCourses"
                  type="checkbox"
                  checked={showCourses}
                  onChange={() => setShowCourses(!showCourses)}
                  className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="showCourses"
                  className="ml-3 text-gray-700 text-sm"
                >
                  Show courses you're taking on your profile page
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
