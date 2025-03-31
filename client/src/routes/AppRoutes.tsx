import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import ProfileMain from "@/pages/ProfilePage/SwitchPagesProfile/ProfileMain";
import UdemyCredits from "@/components/Navbar/DropDownMenu/UdemyCredits/UdemyCredits";
import PurchaseHistory from "@/components/Navbar/DropDownMenu/PurchaseHistory/PurchaseHistory";
import Subscription from "@/components/Navbar/DropDownMenu/Subscription/Subscription";
import PublicProfile from "@/components/Navbar/DropDownMenu/PublicProfile/PublicProfile";
import PaymentMethods from "@/components/Navbar/DropDownMenu/PaymentMethods/PaymentMethods";
import UdemyBusinessContact from "@/components/Navbar/DropDownMenu/UdemyBusinessContact/UdemyBusinessContact";
import AccountSecurity from "@/pages/ProfilePage/SwitchPagesProfile/AccountSecurity";
import ApiClients from "@/pages/ProfilePage/SwitchPagesProfile/ApiClients";
import Photo from "@/pages/ProfilePage/SwitchPagesProfile/Photo";
import NotificationPreferences from "@/pages/ProfilePage/SwitchPagesProfile/NotificationPreferences";
import Privacy from "@/pages/ProfilePage/SwitchPagesProfile/Privacy";
import CloseAccount from "@/pages/ProfilePage/SwitchPagesProfile/CloseAccount";
import EnrollFreeCourse from "@/pages/EnrollFreeCourse/EnrollFreeCourse";
import VerifyCode from "../pages/VerifyCode/VerifyCode";
import InstructorProfile from "@/pages/InstructorProfile/InstructorProfile";
import PersonalizeField from "@/pages/PersonalizeField/PersonalizeField";
import Terms from "../pages/Terms/Terms";
import SearchNotFound from "@/pages/Search/SearchNotFound/SearchNotFound";
import ReceiptCart from "@/components/Navbar/DropDownMenu/PurchaseHistory/ReceiptCart/ReceiptCart";
import Promotions from "../pages/Terms/TermsPages/Promotions";
import Messages from "@/pages/Messages/Messages";
import OrganizationLogin from "@/pages/OrganizationLogin/OrganizationLogin";
import SignUpOrganization from "@/pages/SignUpOrganization/SignUpOrganization";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";

const LayoutWithNavbarAndFooter = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <>
      <Navbar showMenu={isHomepage} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard/credit-history" element={<UdemyCredits />} />
        <Route path="/user/edit-profile" element={<ProfilePage />} />
        <Route path="/user/edit-privacy" element={<Privacy />} />
        <Route path="/dashboard/purchase-history/" element={<PurchaseHistory />} />
        <Route path="/user/manage-subscriptions/" element={<Subscription />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/dashboard/cart-receipt/" element={<ReceiptCart />} />
        <Route path="/user/public-profile" element={<PublicProfile />} />
        <Route path="/user/edit-account" element={<AccountSecurity />} />
        <Route path="/user/close-account" element={<CloseAccount />} />
        <Route path="/cart/subscribe/course/:courseId" element={<EnrollFreeCourse />} />
        <Route path="/user/photo" element={<Photo />} />
        <Route path="/user/edit-api-clients" element={<ApiClients />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/loader" element={<Loader useSmallLoading={false} hSize="" />} />
        <Route path="/user/edit-notifications/" element={<NotificationPreferences />} />
        <Route path="/user/edit-payment-methods/" element={<PaymentMethods />} />
        <Route path="/user/instructor/:instructorId" element={<InstructorProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/courses/search" element={<SearchPage />} />
        <Route path="/not/search/not/found/:searchTerm" element={<SearchNotFound />} />
        <Route path="/course-view/:courseId" element={<ViewCoursePageInfo />} />
        <Route path="/terms-of-use" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas que usam Navbar e Footer */}
        <Route path="*" element={<LayoutWithNavbarAndFooter />} />

        {/* Rotas sem Navbar */}
        <Route path="/demo-business" element={<UdemyBusinessContact />} />
        <Route path="/payment/checkout/" element={<Payment />} />
        <Route path="/course/:courseId/lesson/:id/*" element={<LessonPage />} />
        <Route path="/personalize/field/" element={<PersonalizeField />} />
        <Route path="/terms/promotions" element={<Promotions />} />
        <Route path="/organization/global-login/email" element={<OrganizationLogin />} />
        <Route path="hc/en-us/requests/new/ticket_form_id" element={<SignUpOrganization />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
