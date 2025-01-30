import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import LessonPage from "../pages/Lesson/LessonPage";
import SearchPage from "@/pages/Search/SearchPage";
import Homepage from "@/pages/Home/Homepage";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";
import ViewCoursePageInfo from "@/pages/ViewCoursePageInfo/ViewCoursePageInfo";
import Loader from "@/components/Loader/Loader";
import ShoppingCart from "@/pages/ShoppingCart/ShoppingCart";
import SignUp from "@/pages/SignUp/Signup";
import Login from "@/pages/Login/Login";
import Wishlist from "@/pages/Wishlist/Wishlist";
import Logout from "@/pages/Logout/Logout";
import Payment from "@/pages/Payment/Payment";
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
import AccountSecurity from "@/components/Navbar/DropDownMenu/ProfilePage/AccountSecurity/AccountSecurity";
import ApiClients from "@/components/Navbar/DropDownMenu/ProfilePage/ApiClients/ApiClients";
import Photo from "@/components/Navbar/DropDownMenu/ProfilePage/Photo/Photo";
import NotificationPreferences from "@/components/Navbar/DropDownMenu/ProfilePage/NotificationPrefrences/NotificationPreferences";
import Privacy from "@/components/Navbar/DropDownMenu/ProfilePage/Privacy/Privacy";
import CloseAccount from "@/components/Navbar/DropDownMenu/ProfilePage/CloseAccount/CloseAccount";
import EnrollFreeCourse from "@/pages/EnrollFreeCourse/EnrollFreeCourse";
import VerifyCode from "../pages/Login/VerifyCode";
import LoginBusiness from "../pages/Login/LoginBusiness";
import LoginBusniness from "../pages/Login/LoginBusiness";

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

export const emailContext = createContext({
  email: "",
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

  const [emailUser, setEmailUser] = useState("");

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
                <Route path="/user/edit-profile" element={<ProfileMain />} />
                <Route path="/user/edit-privacy" element={<Privacy />} />
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
                <Route
                  path="/user/edit-account"
                  element={<AccountSecurity />}
                />
                <Route path="/user/close-account" element={<CloseAccount />} />
                <Route
                  path="/cart/subscribe/course/:courseId"
                  element={<EnrollFreeCourse />}
                />
                <Route path="/user/photo" element={<Photo />} />
                <Route path="/user/edit-api-clients" element={<ApiClients />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route
                  path="/loader"
                  element={<Loader useSmallLoading={false} hSize="" />}
                />
                <Route
                  path="/user/edit-notifications/"
                  element={<NotificationPreferences />}
                />
                <Route
                  path="/user/edit-payment-methods/"
                  element={<PaymentMethods />}
                />
                <Route path="/logout" element={<Logout />} />
                <Route
                  path="/Signup"
                  element={
                    <emailContext.Provider value={[emailUser, setEmailUser]}>
                      <SignUp />
                    </emailContext.Provider>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <emailContext.Provider value={[emailUser, setEmailUser]}>
                      <Login />
                    </emailContext.Provider>
                  }
                />
                <Route
                  path="/verify-code"
                  element={
                    <emailContext.Provider value={[emailUser, setEmailUser]}>
                      <VerifyCode />
                    </emailContext.Provider>
                  }
                />

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
          path="/course/:courseId/lesson/:id/*"
          element={
            <>
              <LessonPage />
            </>
          }
        />
        <Route
          path="/Login-Business"
          element={
            <emailContext.Provider value={[emailUser, setEmailUser]}>
              <LoginBusniness />
            </emailContext.Provider>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
