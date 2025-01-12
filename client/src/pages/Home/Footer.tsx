import LogoFooter from '../../../public/images/logo-udemy-inverted.svg'
import Nasdaq from '../../../public/images/nasdaq-light.svg';
import Wolkswagen from '../../../public/images/volkswagen-light (1).svg';
import Box from '../../../public/images/box-light.svg';
import Netapp from '../../../public/images/netapp-light.svg';
import Eventbrite from '../../../public/images/eventbrite-light.svg';
import { MdOutlineLanguage } from "react-icons/md";




const Footer = () => {
  const sections = [
    {
      title: "Certifications by Issuer",
      links: [
        "Amazon Web Services (AWS) Certifications",
        "Six Sigma Certifications",
        "Microsoft Certifications",
        "Cisco Certifications",
        "Tableau Certifications",
        "See all Certifications",
      ],
    },
    {
      title: "Web Development",
      links: ["Web Development", "JavaScript", "React JS", "Angular", "Java"],
    },
    {
      title: "IT Certifications",
      links: [
        "Amazon AWS",
        "AWS Certified Cloud Practitioner",
        "AZ-900: Microsoft Azure Fundamentals",
        "AWS Certified Solutions Architect - Associate",
        "Kubernetes",
      ],
    },
    {
      title: "Leadership",
      links: [
        "Leadership",
        "Management Skills",
        "Project Management",
        "Personal Productivity",
        "Emotional Intelligence",
      ],
    },
    {
      title: "Certifications by Skill",
      links: [
        "Cybersecurity Certification",
        "Project Management Certification",
        "Cloud Certification",
        "Data Analytics Certification",
        "HR Management Certification",
        "See all Certifications",
      ],
    },

    {
      title: "Data Science",
      links: [
        "Data Science",
        "Python",
        "Machine Learning",
        "ChatGPT",
        "Deep Learning",
      ],
    },


    {
      title: "Communication",
      links: [
        "Communication Skills",
        "Presentation Skills",
        "Public Speaking",
        "Writing",
        "PowerPoint",
      ],
    },
    {
      title: "Business Analytics & Intelligence",
      links: [
        "Microsoft Excel",
        "SQL",
        "Microsoft Power BI",
        "Data Analysis",
        "Business Analysis",
      ],
    },
  ];

  const bottomSections = [
    {
      title: "About",
      links: ["About us", "Careers", "Contact us", "Blog", "Investors"],
    },
    {
      title: "Discovery Udemy",
      links: [
        "Get the app",
        "Teach on Udemy",
        "Plans and Pricing",
        "Affiliate",
        "Help and Support",
      ],
    },
    {
      title: "Udemy for Business",
      links: ["Udemy Business"],
    },
    {
      title: "Legal & Accessibility",
      links: ["Accessibility statement", "Privacy policy", "Sitemap", "Terms"],
    },
  ];

  return (
    <footer className="text-white">
      {/* Top Section */}
      <div className="bg-[#1c1d1f]">
        <div className="flex items-center justify-between font-bold my-8 border-y-[0.5px] border-y-[#9DA3A7] py-6 px-12">
          {/* Texto no lado esquerdo */}
          <p className="text-[18px]">
            Top companies choose <span className="text-[#C0C4FC]">Udemy Business</span> to build in-demand career skills.
          </p>

          {/* Logos no lado direito */}
          <div className="flex space-x-6">
            <img src={Nasdaq} alt="Nasdaq Logo" className="h-11 w-auto" />
            <img src={Wolkswagen} alt="Volkswagen Logo" className="h-11 w-auto" />
            <img src={Box} alt="Box Logo" className="h-11 w-auto" />
            <img src={Netapp} alt="NetApp Logo" className="h-11 w-auto" />
            <img src={Eventbrite} alt="Eventbrite Logo" className="h-11 w-auto" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 px-12">
          <p className="col-span-full text-lg font-semibold mb-4">
            Explore top skills and certifications
          </p>
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2 text-sm text-[#F1FFFF] hover:text-white transition">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="relative bg-[#101112]">
          {/* Borda entre logo e about */}
          <div className="w-full h-[1px] bg-white"></div>

          <div className="px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
              {bottomSections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-bold mb-4">{section.title}</h4>
                  <ul>
                    {section.links.map((link, i) => (
                      <li key={i} className="mb-2 text-sm text-gray-300 hover:text-white transition">
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé Final */}
          <div className="flex justify-between items-center py-8 px-12">
            {/* Logo no canto esquerdo */}
            <div className="flex items-center">
              <img src={LogoFooter} alt="Logo" className="h-8 w-auto mr-4" />
              <p className="text-sm text-white">&copy; 2025 Udemy, Inc.</p>
            </div>

            {/* Cookie settings no meio */}
            <div className="text-center">
              <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                Cookie settings
              </p>
            </div>

            {/* Idioma no canto direito */}
            <div className="flex items-center space-x-2">
              <MdOutlineLanguage className="text-gray-300" />
              <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                English
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
