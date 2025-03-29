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
          <div className="flex w-full flex-row items-center justify-center gap-[1em]">
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
