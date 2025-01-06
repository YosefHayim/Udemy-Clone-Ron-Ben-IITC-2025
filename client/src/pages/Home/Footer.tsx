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
      title: "Web Development",
      links: ["Web Development", "JavaScript", "React JS", "Angular", "Java"],
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
      <div className="bg-[#1c1d1f] px-12">
        {/* Top section */}
        <p className="text-sm  font-bold mb-8 border-y border-y-white py-9 text-[18px] px-12 -mx-12">
          Top companies choose{" "}
          <span className="text-purple-500">Udemy Business</span> to build
          in-demand career skills.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
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

        {/* Bottom section */}
        <div className="bg-[#101112] -mx-12 px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bottomSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold mb-4">{section.title}</h4>
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

          <div className="flex justify-between items-center mt-8 bg-[#101112]">
            <p className="text-sm">&copy; 2025 Udemy, Inc.</p>
            <p className="text-sm">Cookie settings</p>
            <p className="text-sm">🌐 English</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
