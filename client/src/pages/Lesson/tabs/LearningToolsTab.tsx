const LearningToolsTab: React.FC = () => {
  return (
    <div id="learning-tools" className="p-10">
      <h2 className="text-xl font-bold mb-4">Learning reminders</h2>
      <p className="mb-6">
        Set up push notifications or calendar events to stay on track for your
        learning goals.
      </p>
      <button className="focus:outline-none bg-purple-500 text-white py-2 px-4 rounded mb-10 hover:bg-purple-600">
        + Add a learning reminder
      </button>

      <h3 className="text-lg font-semibold mb-2">Mobile notifications</h3>
      <p className="mb-4">Receive learning reminders on your mobile device.</p>

      <div className="flex items-center space-x-4">
        <img
          src="app-logo-placeholder.png"
          alt="App Logo"
          className="w-16 h-16 rounded"
        />
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <select className="border rounded p-2">
              <option value="+1">+1 (United States)</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              placeholder="123 456 7890"
              className="border rounded p-2 flex-grow"
            />
            <button className="focus:outline-none bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              Send
            </button>
          </div>
          <p className="text-sm text-gray-500">
            By providing your phone number, you agree to receive a one-time
            automated text message with a link to get the app. Standard
            messaging rates may apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningToolsTab;
