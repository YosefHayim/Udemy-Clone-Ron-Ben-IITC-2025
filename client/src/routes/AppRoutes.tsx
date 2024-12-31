import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Signup from '../pages/SignupPage';
import NotFound from '../pages/NotFound';


const AppRoutes: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export default AppRoutes;
