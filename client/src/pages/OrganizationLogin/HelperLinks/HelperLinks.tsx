import React from 'react';
import { Link } from 'react-router-dom';

const HelperLinks = () => {
  return (
    <div>
      <Link
        to="/hc/en-us/requests/new/ticket_form_id"
        className="text-btnColor transition-colors duration-200 hover:text-[#892de1] focus:outline-none"
      >
        Need help with logging in or signing up?
      </Link>
      <Link
        to="/terms-of-use"
        className="text-gray-600 transition-colors duration-200 hover:text-gray-800"
      >
        Read our Privacy Statement
      </Link>
    </div>
  );
};

export default HelperLinks;
