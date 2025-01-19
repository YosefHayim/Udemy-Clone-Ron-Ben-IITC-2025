import { useState } from "react";
import SideBarProfile from "../ProfilePage/SideBarProfile"; // Importando o componente da Sidebar

const NotificationPreferences = () => {
  // Estados para os switches de categorias
  const [updatesEnabled, setUpdatesEnabled] = useState(true);
  const [learningEnabled, setLearningEnabled] = useState(true);

  // Estados para os checkboxes
  const [preferences, setPreferences] = useState({
    productLaunches: true,
    offersPromotions: true,
    learningStats: true,
    inspiration: true,
    courseRecommendations: true,
    notificationsFromInstructors: true,
  });

  // Função para alternar categorias
  const toggleCategory = (category) => {
    if (category === "updates") {
      setUpdatesEnabled(!updatesEnabled);
    } else if (category === "learning") {
      setLearningEnabled(!learningEnabled);
    }
  };

  // Função para alternar os checkboxes
  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Função para salvar as alterações (simulação)
  const handleSave = () => {
    alert("Notification preferences saved!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBarProfile />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Notification preferences
          </h2>
          <p className="text-gray-600 mb-6">
            Manage the types of communications you receive.
          </p>

          {/* Updates and Offerings */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Updates and offerings
              </h3>
              <button
                onClick={() => toggleCategory("updates")}
                className={`w-12 h-6 flex items-center rounded-full p-1 ${
                  updatesEnabled ? "bg-purple-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                    updatesEnabled ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
            {updatesEnabled && (
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="productLaunches"
                    checked={preferences.productLaunches}
                    onChange={() => togglePreference("productLaunches")}
                    className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="productLaunches"
                    className="ml-3 text-gray-700 text-sm"
                  >
                    Product launches and announcements
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="offersPromotions"
                    checked={preferences.offersPromotions}
                    onChange={() => togglePreference("offersPromotions")}
                    className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="offersPromotions"
                    className="ml-3 text-gray-700 text-sm"
                  >
                    Offers and promotions
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Your Learning */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Your learning
              </h3>
              <button
                onClick={() => toggleCategory("learning")}
                className={`w-12 h-6 flex items-center rounded-full p-1 ${
                  learningEnabled ? "bg-purple-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                    learningEnabled ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
            {learningEnabled && (
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="learningStats"
                    checked={preferences.learningStats}
                    onChange={() => togglePreference("learningStats")}
                    className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="learningStats"
                    className="ml-3 text-gray-700 text-sm"
                  >
                    Learning stats
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="inspiration"
                    checked={preferences.inspiration}
                    onChange={() => togglePreference("inspiration")}
                    className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="inspiration"
                    className="ml-3 text-gray-700 text-sm"
                  >
                    Inspiration (tips, stories, etc.)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="courseRecommendations"
                    checked={preferences.courseRecommendations}
                    onChange={() =>
                      togglePreference("courseRecommendations")
                    }
                    className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="courseRecommendations"
                    className="ml-3 text-gray-700 text-sm"
                  >
                    Course recommendations
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notificationsFromInstructors"
                    checked={preferences.notificationsFromInstructors}
                    onChange={() =>
                      togglePreference("notificationsFromInstructors")
                    }
                    className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="notificationsFromInstructors"
                    className="ml-3 text-gray-700 text-sm"
                  >
                    Notifications from instructors
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Note */}
          <p className="text-sm text-gray-500 mb-6">
            Note: It may take a few hours for changes to be reflected in your
            preferences. You’ll still receive transactional emails related to
            your account and purchases if you unsubscribe.
          </p>

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

export default NotificationPreferences;
