const courseCategories = {
  Development: {
    subCategories: {
      "Web Development": ["JavaScript", "HTML", "CSS", "React", "Node.js"],
      "Data Science": [
        "Python",
        "R",
        "SQL",
        "Machine Learning",
        "Deep Learning",
      ],
      "Mobile Development": ["Swift", "Kotlin", "Flutter", "React Native"],
    },
  },
  Business: {
    subCategories: {
      Entrepreneurship: ["Business Strategy", "Leadership", "Startups"],
      Communication: ["Public Speaking", "Writing", "Negotiation"],
      "Project Management": ["Agile", "Scrum", "PMP", "Risk Management"],
    },
  },
  "Finance & Accounting": {
    subCategories: {
      "Accounting & Bookkeeping": [
        "QuickBooks",
        "Financial Statements",
        "Tax Preparation",
      ],
      "Investing & Trading": ["Stock Trading", "Cryptocurrency", "Options"],
      "Personal Finance": [
        "Budgeting",
        "Retirement Planning",
        "Debt Reduction",
      ],
    },
  },
  "IT & Software": {
    subCategories: {
      "IT Certifications": ["AWS Certification", "CompTIA", "Cisco"],
      "Network & Security": [
        "Cybersecurity",
        "Ethical Hacking",
        "Network Administration",
      ],
      Hardware: ["Computer Repair", "IoT", "Raspberry Pi"],
    },
  },
  Design: {
    subCategories: {
      "Graphic Design": ["Photoshop", "Illustrator", "Canva"],
      "UI/UX Design": ["Wireframing", "Prototyping", "Figma", "Sketch"],
      "3D & Animation": ["Blender", "Maya", "3ds Max"],
    },
  },
  Marketing: {
    subCategories: {
      "Digital Marketing": [
        "SEO",
        "Google Ads",
        "Content Marketing",
        "Social Media Marketing",
      ],
      Branding: ["Logo Design", "Brand Identity", "Storytelling"],
      "Analytics & Automation": [
        "Google Analytics",
        "Marketing Automation Tools",
      ],
    },
  },
  Lifestyle: {
    subCategories: {
      "Arts & Crafts": ["Painting", "Drawing", "Knitting"],
      "Health & Fitness": ["Yoga", "Nutrition", "Personal Training"],
      "Travel & Hobbies": ["Travel Planning", "Photography", "Gardening"],
    },
  },
};

module.exports = courseCategories;
