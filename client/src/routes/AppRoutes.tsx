import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Signup from '../pages/SignupPage';
import NotFound from '../pages/NotFound';
import LeasonPage from '../pages/LeasonPage';


const AppRoutes: React.FC = () => {
  return (
    <Router>
        <Routes>
        <Route path="/video" element={<LeasonPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/lesson/:id" element={<LeasonPage />} />
        </Routes>
    </Router>
  );
};

export default AppRoutes;
