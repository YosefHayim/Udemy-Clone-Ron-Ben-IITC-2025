import Header from '../components/ui/HomePage/Header';
import Banner from '../components/ui/HomePage/Banner';
import Section from '../components/ui/HomePage/Sections';
import TrustedBySection from '../components/ui/HomePage/TrustedbySection';
import LearnersAreViewing from '../components/ui/HomePage/LearnersAreViewing';
import SearchResult from '../components/ui/HomePage/SearchResult';
import LearningGoals from '@/components/ui/HomePage/LearningGoals';
import PlansSection from '@/components/ui/HomePage/PansSection';
import Testimonials from '@/components/ui/HomePage/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-6 lg:px-24'>
      <Banner />
      <Section />
      <TrustedBySection />
      <LearnersAreViewing />
      <SearchResult />
      <LearningGoals />
      <PlansSection />
      <Testimonials />
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