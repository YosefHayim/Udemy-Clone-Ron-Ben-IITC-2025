import OrganizationBackground from './OrganizationBackground/OrganizationBackground';
import OrganizationLogo from './OrganizationLogo/OrganizationLogo';
import OrganizationForm from './OrganizationForm/OrganizationForm';
import HelperLinks from './HelperLinks/HelperLinks';

const OrganizationLogin = () => {
  return (
    <div className="relative min-h-screen">
      <OrganizationBackground />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-2">
        <div className="mb-[25%] flex w-full max-w-md flex-col items-center gap-6 bg-white p-8 shadow-lg">
          <OrganizationLogo />
          <OrganizationForm />
          <HelperLinks />
        </div>
      </div>
    </div>
  );
};

export default OrganizationLogin;
