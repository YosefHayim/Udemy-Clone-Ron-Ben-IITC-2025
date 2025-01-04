import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <AppRoutes/>
  );
};

export default App;
