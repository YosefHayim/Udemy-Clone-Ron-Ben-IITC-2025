import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Signup from '../pages/SignupPage';
import NotFound from '../pages/NotFound';
import LeasonPage from '../pages/LeasonPage';
import HomePage from '@/pages/HomePage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/lesson/:id/*" element={<LeasonPage />} />
        </Routes>
    </Router>
  );
};

export default AppRoutes;
