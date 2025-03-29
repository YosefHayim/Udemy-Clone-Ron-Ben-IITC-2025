import { useSelector } from "react-redux";
import LogoFooter from "/images/logo-udemy-inverted.svg";
import Nasdaq from "/images/nasdaq-light.svg";
import Wolkswagen from "/images/volkswagen-light (1).svg";
import Box from "/images/box-light.svg";
import Netapp from "/images/netapp-light.svg";
import Eventbrite from "/images/eventbrite-light.svg";
import { MdOutlineLanguage } from "react-icons/md";
import FooterLogin from "@/components/FooterLogin/FooterLogin";
import { bottomSections, sections } from "@/utils/footerCategories";
import { RootState } from "@/redux/store";

const Footer: React.FC = () => {
  const user = useSelector((state: RootState) => state?.user);

  return (
    <div className="relative">
      {user && (
        <>
          <FooterLogin />
          <footer className="text-white">
            {/* Top Section */}
            <div className="bg-blackUdemy">
              <div className="flex items-center justify-between border-y-[0.5px]  border-y-[#9DA3A7] px-12 py-6 font-sans font-extrabold">
                <p className="text-[18px]">
                  Welcome back! Explore <span className="text-[#C0C4FC]">Udemy Business</span> and
                  keep growing your skills.
                </p>
                <div className="flex space-x-6">
                  <img src={Nasdaq} alt="Nasdaq Logo" className="h-11 w-auto" />
                  <img src={Wolkswagen} alt="Volkswagen Logo" className="h-11 w-auto" />
                  <img src={Box} alt="Box Logo" className="h-11 w-auto" />
                  <img src={Netapp} alt="NetApp Logo" className="h-11 w-auto" />
                  <img src={Eventbrite} alt="Eventbrite Logo" className="h-11 w-auto" />
                </div>
              </div>

              {/* Middle Section */}
              <div className="grid grid-cols-1 gap-8 px-12 pb-8 pt-8 sm:grid-cols-2 lg:grid-cols-4">
                <p className="col-span-full mb-4 text-lg font-semibold">
                  Explore top skills and certifications
                </p>
                {sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="mb-4 font-sans text-lg font-extrabold">{section.title}</h4>
                    <ul>
                      {section.links.map((link, i) => (
                        <li
                          key={i}
                          className="mb-2 text-sm text-[#F1FFFF] transition hover:text-white"
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="relative bg-[#101112]">
                <div className="h-[1px] w-full bg-white"></div>
                <div className="px-12">
                  <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
                    {bottomSections.map((section, index) => (
                      <div key={index}>
                        <h4 className="mb-4 font-sans text-lg font-extrabold">{section.title}</h4>
                        <ul>
                          {section.links.map((link, i) => (
                            <li
                              key={i}
                              className="mb-2 text-sm text-gray-300 transition hover:text-white"
                            >
                              {link}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Final */}
                <div className="flex items-center justify-between px-12 py-8">
                  <div className="flex items-center">
                    <img src={LogoFooter} alt="Logo" className="mr-4 h-8 w-auto" />
                    <p className="text-sm text-white">&copy; 2025 Udemy, Inc.</p>
                  </div>
                  <div className="text-center">
                    <p className="cursor-pointer text-sm text-gray-300 hover:text-white">
                      Cookie settings
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdOutlineLanguage className="text-gray-300" />
                    <p className="cursor-pointer text-sm text-gray-300 hover:text-white">English</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}

      {!user && (
        <footer className="text-white">
          {/* Conteúdo de visitante */}
          <div className="bg-blackUdemy">
            {/* Todo conteúdo de guest (manter o mesmo original, se necessário) */}
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
