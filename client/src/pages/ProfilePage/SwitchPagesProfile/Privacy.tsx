import { useState } from "react";
import SideBarProfile from "../SideBarProfile"; // Importando o componente da Sidebar

const Privacy = () => {
  // Estados para as configurações de privacidade
  const [showProfile, setShowProfile] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  // Função para salvar as alterações (simulação)
  const handleSave = () => {
    alert("Privacy settings saved!");
  };

  return (
    <main className="flex-1 pt-4 border-l min-h-screen">
      
        {/* Título e descrição */}
        <div className="text-center  border-gray-300 pb-4 mb-6">
          <h2 className="font-sans text-2xl font-extrabold text-gray-800">Privacy</h2>
          <p className="text-gray-700 text-[0.875rem] pt-2 pb-4 font-semibold">Modify your privacy settings here.</p>
        <hr className="w-full"/>
        </div>
  
        {/* Profile Page Settings */}
        <div className="mb-6 ml-[9rem] pt-0">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Profile page settings</h3>
          <div className="space-y-4">
            {/* Option 1 */}
            <div className="flex items-center">
              <input
                id="showProfile"
                type="checkbox"
                checked={showProfile}
                onChange={() => setShowProfile(!showProfile)}
                className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="showProfile" className="ml-3 text-sm text-gray-700">
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
                className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="showCourses" className="ml-3 text-sm text-gray-700">
                Show courses you're taking on your profile page
              </label>
            </div>
          </div>
        </div>
  
        {/* Save Button alinhado à esquerda */}
        <div className="flex justify-start mt-4 ml-[9rem]">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md bg-purple-600 px-6 py-2 text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 font-bold"
          >
            Save
          </button>
        </div>
    </main>
  );
  
};

export default Privacy;
