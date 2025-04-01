import React from 'react';
import udemyAppIcon from '/images/udemy-app-icon.svg';

const LearningToolsTab: React.FC = () => {
  return (
    <div id="learning-tools" className="p-10">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Learning reminders</h2>
        <p className="mb-6 text-sm">Set up push notifications or calendar events to stay on track for your learning goals.</p>
        
        <button className="bg-[#892DE1] text-white px-4 text-base py-3 rounded flex items-center">
          <span className="text-xl mr-2">+</span> Add a learning reminder
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Mobile notifications</h2>
        <p className="mb-6">Receive learning reminders on your mobile device.</p>
        
        <div className="flex items-start space-x-6">
            <div className="w-32 h-32 self-center">
              <img src={udemyAppIcon} alt="Udemy App" className="w-full h-full" />
            </div>

          
          <div className="flex-1">
            <p className="mb-3 font-medium text-sm font-semibold">Text me a link to download the app</p>
            
            <div className="mb-2">
              <div className="relative text-base max-w-96">
                <select className="w-full bg-white border rounded p-3 pr-8 appearance-none focus:outline-none">
                  <option>+1 (United States)</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex max-w-52 text-base mb-3">
              <input 
                type="text" 
                placeholder="123 456 7890" 
                className="flex-1 bg-white border rounded-l p-3 focus:outline-none"
              />
              <button className="bg-[#892DE1] text-white px-6 py-3 rounded-r font-medium">
                Send
              </button>
            </div>
            
            <p className="text-sm text-gray-500">
              By providing your phone number, you agree to receive a one-time automated text message with a link to get app. Standard messaging rates may apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningToolsTab;