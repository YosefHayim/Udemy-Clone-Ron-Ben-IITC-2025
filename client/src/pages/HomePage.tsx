import Header from '../components/ui/HomePage/Header';
import Banner from '../components/ui/HomePage/Banner';
import Section from '../components/ui/HomePage/Sections'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-6 lg:px-24'>
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

export default HomePage;