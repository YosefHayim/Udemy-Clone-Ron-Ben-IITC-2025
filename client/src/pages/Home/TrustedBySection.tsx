import vwLogo from "/images/volkswagen_logo.svg";
import samsungLogo from "/images/samsung_logo.svg";
import ciscoLogo from "/images/cisco_logo.svg";
import vimeoLogo from "/images/vimeo_logo_resized-2.svg";
import pgLogo from "/images/procter_gamble_logo.svg";
import hpLogo from "/images/hewlett_packard_enterprise_logo.svg";
import citiLogo from "/images/citi_logo.svg";
import ericssonLogo from "/images/ericsson_logo.svg";

const TrustedBySection = () => {
  const logos = [
    { src: vwLogo, alt: "Volkswagen" },
    { src: samsungLogo, alt: "Samsung" },
    { src: ciscoLogo, alt: "Cisco" },
    { src: vimeoLogo, alt: "Vimeo" },
    { src: pgLogo, alt: "P&G" },
    { src: hpLogo, alt: "Hewlett Packard Enterprise" },
    { src: citiLogo, alt: "Citi" },
    { src: ericssonLogo, alt: "Ericsson" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-lg text-gray-500 font-medium">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-6">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="px-8 h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;
