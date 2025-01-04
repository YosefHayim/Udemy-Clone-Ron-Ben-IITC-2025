import Header from "../../components/Homepage/Header";
import Banner from "../../components/Homepage/Banner";
import Section from "../../components/Homepage/Sections";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 lg:px-24">
        <Banner />
        <Section />
      </div>
      {/* <Login />
      <SignUp /> */}
      {/* <Banner />
      <Categories />
      <CourseList />
      <Footer /> */}
    </div>
  );
};

export default Homepage;
