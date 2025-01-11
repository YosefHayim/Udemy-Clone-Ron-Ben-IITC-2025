import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/index"; // Import RootState type for Redux

const Welcome = () => {
    return (
      <div className="flex items-center space-x-4 bg-white p-6">
        {/* Avatar */}
        <div className="w-16 h-16 flex items-center justify-center bg-black text-white text-xl font-bold rounded-full">
          BK
        </div>
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-bold">Welcome back, Ben</h2>
          <a href="#" className="text-purple-600 underline">
            Add occupation and interests
          </a>
        </div>
      </div>
    );
  };
  
  export default Welcome;
  