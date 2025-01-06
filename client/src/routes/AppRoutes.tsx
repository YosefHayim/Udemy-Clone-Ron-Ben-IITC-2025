import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/LoginPage";
import Signup from "../pages/SignUp/SignupPage";
import NotFound from "../pages/404/NotFound";
import LessonPage from "../pages/Lesson/LessonPage";
import SearchPage from "@/pages/Search/SearchPage";
import Homepage from "@/pages/Home/Homepage";
import Header from "@/pages/Home/Header";
import Footer from "@/pages/Home/Footer";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/courses/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/lesson/:id/*" element={<LessonPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
