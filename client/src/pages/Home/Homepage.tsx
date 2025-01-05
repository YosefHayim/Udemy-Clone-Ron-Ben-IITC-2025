import Header from "./Header";
import Banner from "./Banner";
import Section from "./Sections";

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
