import { logos } from "@/utils/trustedByCompaniesLogos";

const TrustedBySection = () => {
  return (
    <section className="bg-white py-12">
      <div className="mb-8 text-center">
        <h2 className="font-sans text-lg font-medium text-gray-500">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center space-x-6">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto px-8 grayscale transition duration-300 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;
