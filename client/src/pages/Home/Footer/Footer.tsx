import { useSelector } from "react-redux";
import { RootState } from "../../redux/index"; // Importa o RootState do Redux
import LogoFooter from "/images/logo-udemy-inverted.svg";
import Nasdaq from "/images/nasdaq-light.svg";
import Wolkswagen from "/images/volkswagen-light (1).svg";
import Box from "/images/box-light.svg";
import Netapp from "/images/netapp-light.svg";
import Eventbrite from "/images/eventbrite-light.svg";
import { MdOutlineLanguage } from "react-icons/md";
import FooterLogin from "@/components/FooterLogin.tsx/FooterLogin";
import { bottomSections, sections } from "@/utils/footerCategories";

const Footer: React.FC = () => {
  // Obtemos o user do estado global
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      {user && (
        <>
          <FooterLogin />
          <footer className="text-white">
            {/* Top Section */}
            <div className="bg-[#1c1d1f]">
              <div className="flex items-center justify-between font-bold  border-y-[0.5px] border-y-[#9DA3A7] py-6 px-12">
                <p className="text-[18px]">
                  Welcome back! Explore{" "}
                  <span className="text-[#C0C4FC]">Udemy Business</span> and
                  keep growing your skills.
                </p>
                <div className="flex space-x-6">
                  <img src={Nasdaq} alt="Nasdaq Logo" className="h-11 w-auto" />
                  <img
                    src={Wolkswagen}
                    alt="Volkswagen Logo"
                    className="h-11 w-auto"
                  />
                  <img src={Box} alt="Box Logo" className="h-11 w-auto" />
                  <img src={Netapp} alt="NetApp Logo" className="h-11 w-auto" />
                  <img
                    src={Eventbrite}
                    alt="Eventbrite Logo"
                    className="h-11 w-auto"
                  />
                </div>
              </div>

              {/* Middle Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 pt-8 px-12">
                <p className="col-span-full text-lg font-semibold mb-4">
                  Explore top skills and certifications
                </p>
                {sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-bold mb-4">{section.title}</h4>
                    <ul>
                      {section.links.map((link, i) => (
                        <li
                          key={i}
                          className="mb-2 text-sm text-[#F1FFFF] hover:text-white transition"
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
                <div className="w-full h-[1px] bg-white"></div>
                <div className="px-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
                    {bottomSections.map((section, index) => (
                      <div key={index}>
                        <h4 className="text-lg font-bold mb-4">
                          {section.title}
                        </h4>
                        <ul>
                          {section.links.map((link, i) => (
                            <li
                              key={i}
                              className="mb-2 text-sm text-gray-300 hover:text-white transition"
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
                <div className="flex justify-between items-center py-8 px-12">
                  <div className="flex items-center">
                    <img
                      src={LogoFooter}
                      alt="Logo"
                      className="h-8 w-auto mr-4"
                    />
                    <p className="text-sm text-white">
                      &copy; 2025 Udemy, Inc.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                      Cookie settings
                    </p>
                  </div>
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
        </>
      )}

      {!user && (
        <footer className="text-white">
          {/* Conteúdo de visitante */}
          <div className="bg-[#1c1d1f]">
            {/* Todo conteúdo de guest (manter o mesmo original, se necessário) */}
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
