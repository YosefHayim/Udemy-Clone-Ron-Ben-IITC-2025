import UdemyBusinessFooter from "./UdemyBusinessFooter/UdemyBusinessFooter";
import UdemyBusinessForm from "./UdemyBusinessForm/UdemyBusinessForm";
import UdemyBusinessNavbar from "./UdemyBusinessNavbar/UdemyBusinessNavbar";
import UdemyGetYourDemoSection from "./UdemyGetYourDemoSection/UdemyGetYourDemoSection";

const UdemyBusinessContact = () => {
  return (
    <div>
      <div>
        <UdemyBusinessNavbar />
        <div>
          <div className="flex flex-row items-center justify-center gap-[1em] w-full">
            <UdemyGetYourDemoSection />
            <UdemyBusinessForm />
          </div>
        </div>
      </div>
      <UdemyBusinessFooter />
    </div>
  );
};

export default UdemyBusinessContact;
