import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import LessonPage from "../pages/Lesson/LessonPage";
import SearchPage from "@/pages/Search/SearchPage";
import Homepage from "@/pages/Home/Homepage";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/pages/Home/Footer";
import ViewCoursePageInfo from "@/pages/ViewCoursePageInfo/ViewCoursePageInfo";
import Loader from "@/components/Loader/Loader";
import ShoppingCart from "@/pages/ShoppingCart/ShoppingCart";
import SignUp from "@/pages/SignUp/Signup";
import Login from "@/pages/Login/Login";
import Wishlist from "@/pages/Wishlist/Wishlist";
import Logout from "@/pages/Logout/Logout";
import Payment from "@/pages/Payment/Payment";
import EditProfile from "@/pages/EditProfile/EditProfile";
import OAuthCallback from "@/pages/Login/OAuthCallback";
import ProfileMain from "@/pages/ProfilePage/ProfileMain";
import UdemyCredits from "@/pages/UdemyCredits/UdemyCredits";
import PurchaseHistory from "@/pages/PurchaseHistory/PurchaseHistory";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Routes where Navbar is shown */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/dashboard/credit-history"
                  element={<UdemyCredits />}
                />
                <Route path="/edit-profile" element={<ProfileMain />} />
                <Route
                  path="/dashboard/purchase-history/"
                  element={<PurchaseHistory />}
                />
                <Route path="/" element={<OAuthCallback />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route
                  path="/loader"
                  element={<Loader useSmallLoading={false} hSize="" />}
                />
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/courses/search" element={<SearchPage />} />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/course-view/:courseId"
                  element={<ViewCoursePageInfo />}
                />
              </Routes>
              <Footer />
            </>
          }
        />
        {/* Route where navbar is hidden */}
        <Route path="/payment/checkout/" element={<Payment />} />
        <Route
          path="/instructor/profile/basic-information/"
          element={<EditProfile />}
        />
        <Route
          path="/course/:courseId/lesson/:id/*"
          element={
            <>
              <LessonPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
