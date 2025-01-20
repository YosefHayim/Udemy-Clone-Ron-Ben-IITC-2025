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
import ProfileMain from "@/components/Navbar/DropDownMenu/ProfilePage/ProfileMain/ProfileMain";
import UdemyCredits from "@/components/Navbar/DropDownMenu/UdemyCredits/UdemyCredits";
import PurchaseHistory from "@/components/Navbar/DropDownMenu/PurchaseHistory/PurchaseHistory";
import Subscription from "@/components/Navbar/DropDownMenu/Subscription/Subscription";
import PublicProfile from "@/components/Navbar/DropDownMenu/PublicProfile/PublicProfile";
import PaymentMethods from "@/components/Navbar/DropDownMenu/PaymentMethods/PaymentMethods";
import UdemyBusinessContact from "@/components/Navbar/DropDownMenu/UdemyBusinessContact/UdemyBusinessContact";
import { createContext, useState } from "react";
import { FilterDataProps } from "@/types/types";

export const filterContext = createContext<FilterDataProps>({
  sortBy: "",
  handsOnPractice: new Set(),
  language: new Set(),
  levels: new Set(),
  price: "",
  ratings: 0,
  subtitles: new Set(),
  topics: new Set(),
  videosDurations: new Set(),
  certificateOnly: false,
});

const AppRoutes: React.FC = () => {
  const [filterData, setFilterData] = useState({
    sortBy: "",
    handsOnPractice: new Set(),
    language: new Set(),
    levels: new Set(),
    price: "",
    ratings: 0,
    subtitles: new Set(),
    topics: new Set(),
    videosDurations: new Set(),
    certificateOnly: false,
  });

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
                <Route
                  path="/user/manage-subscriptions/"
                  element={<Subscription />}
                />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route
                  path="/user/public-profile"
                  element={<PublicProfile />}
                />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route
                  path="/loader"
                  element={<Loader useSmallLoading={false} hSize="" />}
                />
                <Route path="/Signup" element={<SignUp />} />
                <Route
                  path="/user/edit-payment-methods/"
                  element={<PaymentMethods />}
                />
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/courses/search"
                  element={
                    <filterContext.Provider value={[filterData, setFilterData]}>
                      <SearchPage />
                    </filterContext.Provider>
                  }
                />
                <Route path="*" element={<NotFound />} />
                <Route path="/error-not-found" element={<NotFound />} />
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
        <Route path="/demo-business" element={<UdemyBusinessContact />} />
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
