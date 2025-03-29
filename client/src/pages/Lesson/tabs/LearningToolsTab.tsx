import udemyAppIcon from '/images/udemy-app-icon.svg';

const LearningToolsTab: React.FC = () => {
  return (
    <div id="learning-tools" className="p-10">
      <h2 className="mb-4 font-sans text-xl font-extrabold">Learning reminders</h2>
      <p className="mb-6">
        Set up push notifications or calendar events to stay on track for your learning goals.
      </p>
      <button className="mb-10 rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:outline-none">
        + Add a learning reminder
      </button>

      <h3 className="mb-2 text-lg font-semibold">Mobile notifications</h3>
      <p className="mb-4">Receive learning reminders on your mobile device.</p>

      <div className="flex items-center space-x-4">
        <img src="udemyAppIcon" alt="App Logo" className="h-16 w-16 rounded" />
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <select className="rounded border p-2">
              <option value="+1">+1 (United States)</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              placeholder="123 456 7890"
              className="flex-grow rounded border p-2"
            />
            <button className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:outline-none">
              Send
            </button>
          </div>
          <p className="text-sm text-gray-500">
            By providing your phone number, you agree to receive a one-time automated text message
            with a link to get the app. Standard messaging rates may apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningToolsTab;
