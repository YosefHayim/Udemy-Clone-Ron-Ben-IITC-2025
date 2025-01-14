import { useState } from "react";

const ExploreMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    {
      title: "Certification Preparation",
      subcategories: [
        {
          group: "Popular Issuers",
          items: [
            {
              title: "Amazon Web Services (AWS) Certifications",
              subcategories: [
                "AWS Certified Solutions Architect - Associate",
                "AWS Certified Cloud Practitioner",
                "AWS Certified Developer - Associate",
                "AWS Certified SysOps Administrator - Associate",
                "AWS Certified Solutions Architect - Professional",
                "AWS Certified DevOps Engineer - Professional",
                "AWS Certified Security - Specialty",
                "AWS Certified Machine Learning - Specialty",
                "AWS Certified Advanced Networking - Specialty",
              ],
            },
            {
              title: "Microsoft Certifications",
              subcategories: [
                "AZ-900: Microsoft Azure Fundamentals",
                "AZ-104: Microsoft Azure Administrator Associate",
                "AZ-204: Microsoft Azure Developer Associate",
                "PL-300: Microsoft Power BI Data Analyst Associate",
                "PL-900: Microsoft Power Platform Fundamentals",
                "AI-900: Microsoft Azure AI Fundamentals",
                "AZ-500: Microsoft Azure Security Engineer Associate",
                "DP-900: Microsoft Azure Data Fundamentals",
                "DP-203: Microsoft Azure Data Engineer Associate",
                "AZ-400: Microsoft DevOps Engineer Expert",
                "AZ-305: Microsoft Azure Solutions Architect Expert",
                "MS-900: Microsoft 365 Fundamentals",
                "SC-200: Microsoft Security Operations Analyst Associate",
                "SC-900: Microsoft Security, Compliance, and Identity Fundamentals",
                "DP-100: Microsoft Azure Data Scientist Associate",
              ],
            },
            {
              title: "Cisco Certifications",
              subcategories: [
                "Cisco Certified Network Associate (CCNA)",
                "Cisco CCNP Enterprise",
                "Cisco Certified CyberOps Associate",
                "Cisco CCIE Security",
                "Cisco CCIE Enterprise Infrastructure",
                "Cisco CCNP Service Provider",
                "Cisco CCT Routing and Switching",
                "Cisco CCIE Data Center",
              ],
            },
            {
              title: "CompTIA Certifications",
              subcategories: [
                "CompTIA A+",
                "CompTIA Security+",
                "CompTIA Network+",
                "CompTIA Cybersecurity Analyst (CySA+)",
                "CompTIA Linux+",
                "CompTIA IT Fundamentals (ITF+)",
                "CompTIA PenTest+",
                "CompTIA Advanced Security Practitioner (CASP+)",
                "CompTIA Cloud+",
                "CompTIA Server+",
                "CompTIA Cloud Essentials+",
                "CompTIA Data+",
              ],
            },
            {
              title: "Project Management Institute (PMI) Certifications",
              subcategories: [
                "PMI Project Management Professional (PMP)",
                "PMI Certified Associate in Project Management (CAPM)",
                "PMI Agile Certified Practitioner (PMI-ACP)",
                "PMI Risk Management Professional (PMI-RMP)",
                "PMI Program Management Professional (PgMP)",
                "PMI Professional in Business Analysis (PMI-PBA)",
                "SAP Certified Associate - SAP Activate Project Manager",
              ],
            },
            {
              title: "Google Cloud Certifications",
              subcategories: [
                "Google Cloud Associate Cloud Engineer",
                "Google Cloud Professional Cloud Architect",
                "Google Cloud Professional Data Engineer",
                "Google Cloud Professional Cloud Developer",
                "Google Cloud Digital Leader",
                "Google Cloud Professional Cloud DevOps Engineer",
                "Google Cloud Professional Cloud Network Engineer",
                "Google Cloud Professional Cloud Security Engineer",
                "Google Cloud Professional Machine Learning Engineer",
                "Google Cloud Professional Cloud Database Engineer",
              ],
            },
            {
              title: "Six Sigma Certifications",
              subcategories: [
                "Lean Six Sigma Green Belt Certification",
                "Lean Six Sigma White Belt Certification",
                "Lean Six Sigma Yellow Belt Certification",
                "Lean Six Sigma Black Belt Certification",
                "Six Sigma Black Belt Certification",
                "Six Sigma Green Belt Certification",
                "Six Sigma Yellow Belt Certification",
                "Six Sigma White Belt Certification",
              ],
            },
            {
              title: "Oracle Certifications",
              subcategories: [
                "1Z0-071: Oracle Database SQL Certified Associate",
                "1Z0-808: Oracle Certified Associate, Java SE 8 Programmer",
                "1Z0-819: Oracle Certified Professional: Java SE 11 Developer",
                "1Z0-149: Oracle Database PL/SQL Developer Certified Professional",
                "1Z0-133: Oracle Certified Associate, WebLogic Server 12c Administrator",
              ],
            },
          ],
        },
        {
          group: "Popular Subjects",
          items: [
            {
              title: "Cloud Certification",
              subcategories: [
                "AWS Certified Solutions Architect - Associate",
                "AWS Certified Cloud Practitioner",
                "AZ-900: Microsoft Azure Fundamentals",
                "AWS Certified Developer - Associate",
                "AZ-104: Microsoft Azure Administrator Associate",
                "AWS Certified SysOps Administrator - Associate",
                "AWS Certified Solutions Architect - Professional",
                "Google Cloud Associate Cloud Engineer",
                "Google Cloud Professional Cloud Architect",
                "Certified Kubernetes Administrator (CKA)",
                "AWS Certified DevOps Engineer - Professional",
                "AWS Certified Security - Specialty",
                "AZ-204: Microsoft Azure Developer Associate",
                "Google Cloud Professional Data Engineer",
                "AWS Certified Machine Learning - Specialty",
              ],
            },
            {
              title: "Networking Certification",
              subcategories: [
                "Cisco Certified Network Associate (CCNA)",
                "CompTIA Network+",
                "Cisco CCNP Enterprise",
                "AWS Certified Advanced Networking - Specialty",
                "Juniper Networks Certified Internet Associate (JNCIA)",
                "F5 BIG-IP Certification",
                "VMware Certified Professional - Network Virtualization (VCP-NV)",
                "Cisco CCIE Enterprise Infrastructure",
                "Juniper Networks Certified Internet Specialist (JNCIS)",
                "Cisco CCNP Service Provider",
                "Cisco CCT Routing and Switching",
                "Palo Alto Networks Certified Network Security Administrator (PCNSA)",
                "HashiCorp Certified: Consul Associate",
              ],
            },
            {
              title: "Cybersecurity Certification",
              subcategories: [
                "CompTIA Security+",
                "Certified Information Systems Security Professional (CISSP)",
                "AWS Certified Security - Specialty",
                "CompTIA Cybersecurity Analyst (CySA+)",
                "Certified in Cybersecurity (CC)",
                "Certified Information Security Manager (CISM)",
                "CompTIA PenTest+",
                "Certified Information Systems Auditor (CISA)",
                "Cisco Certified CyberOps Associate",
                "CompTIA Advanced Security Practitioner (CASP+)",
                "Certified Cloud Security Professional (CCSP)",
                "Certified in Risk and Information Systems Control (CRISC)",
                "SC-200: Microsoft Security Operations Analyst Associate",
                "Google Cloud Professional Cloud Security Engineer",
                "SC-900: Microsoft Security, Compliance, and Identity Fundamentals",
              ],
            },
            {
              title: "Project Management Certification",
              subcategories: [
                "PMI Project Management Professional (PMP)",
                "PMI Certified Associate in Project Management (CAPM)",
                "PMI Agile Certified Practitioner (PMI-ACP)",
                "PMI Risk Management Professional (PMI-RMP)",
                "PMI Program Management Professional (PgMP)",
                "PMI Professional in Business Analysis (PMI-PBA)",
                "SAP Certified Associate - SAP Activate Project Manager",
              ],
            },
            {
              title: "DevOps Certification",
              subcategories: [
                "CompTIA A+",
                "CompTIA IT Fundamentals (ITF+)",
                "Japanese Information Technology Passport Examination",
                "COBIT Foundation Certificate",
              ],
            },
            {
              title: "Coding Certification",
              subcategories: [
                "AWS Certified Developer - Associate",
                "Certified Entry-Level Python Programmer (PCEP)",
                "Certified Associate in Python Programming (PCAP)",
                "1Z0-819: Oracle Certified Professional: Java SE 11 Developer",
              ],
            },
            {
              title: "System Administration Certification",
              subcategories: [
                "Red Hat Certified System Administrator (RHCSA)",
                "Red Hat Certified Engineer (RHCE)",
                "VMware Certified Professional - Desktop Management (VCP-DTM)",
                "MS-700: Microsoft 365 Teams Administrator Associate",
                "MS-203: Microsoft 365 Messaging Administrator Associate",
                "1Z0-133: Oracle Certified Associate, WebLogic Server 12c Administrator",
              ],
            },
            {
              title: "Artificial Intelligence Certification",
              subcategories: [
                "AWS Certified Machine Learning - Specialty",
                "AI-900: Microsoft Azure AI Fundamentals",
                "DP-100: Microsoft Azure Data Scientist Associate",
                "Google Cloud Professional Machine Learning Engineer",
                "AI-102: Microsoft Azure AI Engineer Associate",
                "Databricks Certified Data Engineer Associate",
                "Splunk Enterprise Certified Admin",
                "Databricks Certified Associate Developer for Apache Spark",
                "Splunk Core Certified Power User",
                "Splunk Core Certified User",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Development",
      subcategories: [
        {
          title: "Web Development",
          subcategories: [
            "JavaScript",
            "React JS",
            "Angular",
            "Next.js",
            "CSS",
            "Node.Js",
            "HTML",
            "Typescript",
          ],
        },
        {
          title: "Data Science",
          subcategories: [
            "Machine Learning",
            "Artificial Intelligence (AI)",
            "Python",
            "Large Language Models (LLM)",
            "Deep Learning",
            "Generative AI (GenAI)",
            "MLOps",
            "Data Analysis",
          ],
        },
        {
          title: "Mobile Development",
          subcategories: [
            "Google Flutter",
            "iOS Development",
            "React Native",
            "Android Development",
            "Dart (programming language)",
            "Swift",
            "SwiftUI",
            "Kotlin",
            "Mobile App Development",
          ],
        },
        {
          title: "Programming Languages",
          subcategories: [
            "Python",
            "Java",
            "C# (programming language)",
            "C++ (programming language)",
            "React JS",
            "C (programming language)",
            "Go (programming language)",
            "Spring Framework",
            "Rust (programming language)",
          ],
        },
        {
          title: "Game Development",
          subcategories: [
            "Unreal Engine",
            "Unity",
            "Game Development Fundamentals",
            "3D Game Development",
            "C# (programming language)",
            "Unreal Engine Blueprints",
            "Godot",
            "2D Game Development",
            "C++ (programming language)",
          ],
        },
        {
          title: "Database Design & Development",
          subcategories: [
            "SQL",
            "MySQL",
            "Database Management Systems (DBMS)",
            "SQL Server",
            "PostgreSQL",
            "MongoDB",
            "Oracle SQL",
            "Apache Kafka",
            "Database Administration",
          ],
        },
        {
          title: "Software Testing",
          subcategories: [
            "Microsoft Playwright",
            "Selenium WebDriver",
            "Java",
            "Automation Testing",
            "ISTQB Certified Tester Foundation Level (CTFL)",
            "Postman",
            "Selenium Testing Framework",
            "API Testing",
          ],
        },
        {
          title: "Software Engineering",
          subcategories: [
            "Data Structures",
            "Software Architecture",
            "Certified Kubernetes Application Developer (CKAD)",
            "Algorithms",
            "Coding Interview",
            "Spring Framework",
            "Microservices",
            "Back End Web Development",
            "Software Practices",
          ],
        },
        {
          title: "Software Development Tools",
          subcategories: [
            "Docker",
            "Git",
            "Kubernetes",
            "Prompt Engineering",
            "GitHub Copilot",
            "GitHub",
            "JIRA",
            "Confluence",
            "CI/CD",
          ],
        },
        {
          title: "No-Code Development",
          subcategories: [
            "Generative AI (GenAI)",
            "WordPress",
            "Microsoft Power Apps",
            "Microsoft Power Automate",
            "Microsoft Power Platform",
            "Bubble Visual Programming",
            "Web Design",
            "Microsoft Copilot",
            "Dify",
          ],
        },
      ],
    },
    {
      title: "Business",
      subcategories: [
        {
          title: "Entrepreneurship",
          topics: [
            "Business Fundamentals",
            "Entrepreneurship Fundamentals",
            "Online Business",
            "Business Strategy",
            "ChatGPT",
            "Startup",
            "Freelancing",
            "Business Plan",
            "QuickBooks",
          ],
        },
        {
          title: "Communication",
          topics: [
            "Communication Skills",
            "Presentation Skills",
            "Public Speaking",
            "Writing",
            "Fiction Writing",
            "Business Communication",
            "Storytelling",
            "Assertiveness",
            "Business Writing",
          ],
        },
        {
          title: "Management",
          topics: [
            "Product Management",
            "Leadership",
            "Management Skills",
            "Business Strategy",
            "ISO 9001",
            "Business Fundamentals",
            "Project Management",
            "Quality Management",
            "Risk Management",
          ],
        },
        {
          title: "Sales",
          topics: [
            "Sales Skills",
            "B2B Sales",
            "LinkedIn",
            "Customer Service",
            "Sales Management",
            "Cold Calling",
            "Customer Success Management (CSM)",
            "Business Development",
            "Persuasion",
          ],
        },
        {
          title: "Business Strategy",
          topics: [
            "Artificial Intelligence (AI)",
            "Environmental, Social and Governance (ESG)",
            "ChatGPT",
            "Management Consulting",
            "IIBA Entry Certificate in Business Analysis (ECBA)",
            "Prompt Engineering",
            "Custom GPTs / GPT Builder",
            "The Open Group Certified: TOGAF Enterprise Architecture Foundation",
          ],
        },
        {
          title: "Operations",
          topics: [
            "Supply Chain",
            "Lean Six Sigma Green Belt Certification",
            "Logistics Management",
            "Lean Six Sigma Black Belt Certification",
            "Operations Management",
            "Virtual Assistant Skills",
            "Lean",
            "Quality Management",
            "Inventory Management",
          ],
        },
        {
          title: "Project Management",
          topics: [
            "PMI Project Management Professional (PMP)",
            "PMI Certified Associate in Project Management (CAPM)",
            "PMI PMBOK",
            "Agile",
            "Scrum",
            "Professional Scrum Master (PSM)",
            "PRINCE2",
            "PMI Agile Certified Practitioner (PMI-ACP)",
          ],
        },
        {
          title: "Business Law",
          topics: [
            "Law",
            "Certified Information Privacy Professional (CIPP)",
            "Contract Management",
            "Compliance Management",
            "GDPR",
            "Contract Law",
            "Legal English",
            "Healthcare IT",
          ],
        },
        {
          title: "Business Analytics & Intelligence",
          topics: [
            "Microsoft Power BI",
            "SQL",
            "Data Modeling",
            "Data Analysis",
            "Business Analysis",
            "Tableau",
            "Business Intelligence (BI)",
            "Data Analysis Expressions (DAX)",
            "Business Analytics",
          ],
        },
        {
          title: "Human Resources",
          topics: [
            "Recruiting and Hiring",
            "HR Analytics",
            "Professional in Human Resources (PHR)",
            "Employment Law",
            "Corporate Learning and Development (L&D)",
            "Society for Human Resource Management Certified Professional (SHRM-CP)",
            "Payroll Accounting",
            "Emotional Intelligence",
          ],
        },
        {
          title: "Industry",
          topics: [
            "Piping",
            "Oil and Gas Industry",
            "Chemical Engineering",
            "Aviation",
            "Control Engineering",
            "Workplace Health and Safety",
            "Medical Device Development",
            "Electrical Engineering",
            "Lean Manufacturing",
          ],
        },
        {
          title: "E-Commerce",
          topics: [
            "Dropshipping",
            "Amazon FBA",
            "Shopify Dropshipping",
            "Shopify",
            "Etsy",
            "Amazon Kindle Direct Publishing (KDP)",
            "Online Business",
            "Selling on Amazon",
          ],
        },
        {
          title: "Media",
          topics: [
            "Content Creation",
            "Audiobook Creation",
            "Creative Writing",
            "Amazon Kindle Direct Publishing (KDP)",
            "Screenwriting and Scriptwriting",
            "Scrivener",
            "Search Engine Optimization (SEO)",
            "YouTube Marketing",
            "Generative AI (GenAI)",
          ],
        },
        {
          title: "Real Estate",
          topics: [
            "Real Estate Investing",
            "Construction",
            "Airbnb Hosting",
            "Financial Modeling",
            "Mortgage",
            "Real Estate Flipping",
            "Property Management",
            "Real Estate Marketing",
          ],
        },
        {
          title: "Other Business",
          topics: [
            "ChatGPT",
            "QuickBooks",
            "Data Entry Skills",
            "Grant Writing",
            "Artificial Intelligence (AI)",
            "Generative AI (GenAI)",
            "Reiki",
            "Transcription",
            "Freelance Writing",
          ],
        },
      ],
    }
    ,
    {
      title: "Finance & Accounting",
      subcategories: [
        {
          title: "Accounting & Bookkeeping",
          topics: [
            "Accounting",
            "Bookkeeping",
            "QuickBooks",
            "Financial Accounting",
            "Finance Fundamentals",
            "TallyPrime (Tally.ERP)",
            "Uniform CPA Examination",
            "International Financial Reporting Standards (IFRS)",
            "Financial Statement",
          ],
        },
        {
          title: "Compliance",
          topics: [
            "Anti-Money Laundering (AML)",
            "Criminology",
            "Internal Controls",
            "Compliance Management",
            "Fraud Analytics",
            "Risk Management",
            "Sarbanes-Oxley (SOX)",
            "Trade and Commerce",
            "Internal Auditing",
          ],
        },
        {
          title: "Cryptocurrency & Blockchain",
          topics: [
            "Cryptocurrency",
            "Bitcoin",
            "Blockchain",
            "Binance",
            "Day Trading",
            "Algorithmic Trading",
            "Bitcoin Trading",
            "Cryptography",
            "NFT (Non-Fungible Tokens)",
          ],
        },
        {
          title: "Economics",
          topics: [
            "Macroeconomics",
            "Microeconomics",
            "Global Economics",
            "Finance Fundamentals",
            "Stata",
            "Behavioral Economics",
            "Econometrics",
            "Personal Finance",
          ],
        },
        {
          title: "Finance",
          topics: [
            "Personal Finance",
            "Investment Banking",
            "Finance Fundamentals",
            "Banking",
            "Corporate Finance",
            "Chartered Financial Analyst (CFA)",
            "Financial Analysis",
            "Financial Management",
            "ChatGPT",
          ],
        },
        {
          title: "Finance Cert & Exam Prep",
          topics: [
            "Chartered Financial Analyst (CFA)",
            "Certified Internal Auditor (CIA)",
            "Certified Management Accountant (CMA)",
            "Association of Chartered Certified Accountants (ACCA)",
            "ANBIMA Certification",
            "Certified Financial Planner (CFP)",
            "Cost Accounting",
            "FINRA Securities Industry Essentials (SIE)",
            "Risk Management",
          ],
        },
        {
          title: "Financial Modeling & Analysis",
          topics: [
            "Financial Analysis",
            "Financial Modeling",
            "Microsoft Excel",
            "Investment Banking",
            "Accounting",
            "Finance Fundamentals",
            "Financial Planning",
            "Python",
            "Business Budgeting",
          ],
        },
        {
          title: "Investing & Trading",
          topics: [
            "Stock Trading",
            "Investing",
            "Technical Analysis (finance)",
            "Forex Trading",
            "Financial Markets",
            "Algorithmic Trading",
            "Day Trading",
            "Options Trading",
            "Financial Trading",
          ],
        },
        {
          title: "Money Management Tools",
          topics: [
            "QuickBooks",
            "SAP FICO",
            "Xero",
            "Microsoft Excel",
            "Personal Finance",
            "Excel Analytics",
            "Financial Modeling",
            "Credit Repair",
            "Financial Analysis",
          ],
        },
        {
          title: "Taxes",
          topics: [
            "Tax Preparation",
            "Goods and Services Tax (GST)",
            "Accounting",
            "Value Added Tax (VAT)",
            "Transfer Pricing",
            "Finance Fundamentals",
            "Control Systems",
            "Home Business",
          ],
        },
        {
          title: "Other Finance & Accounting",
          topics: [
            "Budgeting",
            "Expense Management",
            "Audit Preparation",
            "Financial Technology (FinTech)",
            "Cash Flow Management",
            "Debt Management",
            "Wealth Management",
          ],
        },
      ],
    },
    ,
    {
      title: "IT & Software",
      subcategories: [
        {
          title: "IT Certifications",
          topics: [
            "AWS Certified Cloud Practitioner",
            "AWS Certified Solutions Architect - Associate",
            "CompTIA Security+",
            "CompTIA A+",
            "Amazon AWS",
            "Cisco Certified Network Associate (CCNA)",
            "CompTIA Network+",
            "Information Security",
            "AWS Certified AI Practitioner",
          ],
        },
        {
          title: "Network & Security",
          topics: [
            "Ethical Hacking",
            "Cybersecurity",
            "Network Security",
            "IT Networking Fundamentals",
            "Penetration Testing",
            "Kubernetes",
            "CompTIA Security+",
            "IT Auditing",
            "Certified Information Systems Auditor (CISA)",
          ],
        },
        {
          title: "Hardware",
          topics: [
            "PLC",
            "Arduino",
            "Electronics",
            "Embedded Systems",
            "Microcontroller",
            "Raspberry Pi",
            "Embedded C",
            "HMI",
            "Robotic Process Automation (RPA)",
          ],
        },
        {
          title: "Operating Systems & Servers",
          topics: [
            "Linux",
            "Linux Administration",
            "Windows Server",
            "PowerShell",
            "Active Directory",
            "Shell Scripting",
            "Proxmox VE",
            "Linux Command Line",
            "Operating System",
          ],
        },
        {
          title: "Other IT & Software",
          topics: [
            "ChatGPT",
            "DevOps",
            "Python",
            "Generative AI (GenAI)",
            "Data Science",
            "Microsoft Excel",
            "Terraform",
            "Kubernetes",
            "C# (programming language)",
          ],
        },
      ],
    },
    {
      "title": "Office Productivity",
      subcategories: [
        {
          "title": "Microsoft",
          "topics": [
            "Microsoft Excel",
            "Microsoft 365 (Office)",
            "Microsoft Power BI",
            "Excel VBA",
            "PowerPoint",
            "Excel Formulas and Functions",
            "Pivot Tables",
            "Data Analysis",
            "Microsoft SharePoint"
          ]
        },
        {
          "title": "Apple",
          "topics": [
            "Mac Basics",
            "iMovie",
            "Apple Keynote",
            "Apple Products Basics",
            "Numbers For Mac",
            "macOS",
            "Mac Pages",
            "Personal Productivity",
            "Microsoft 365 (Office)"
          ]
        },
        {
          "title": "Google",
          "topics": [
            "Google Sheets",
            "Google Workspace (G Suite)",
            "Google Looker Studio (Data Studio)",
            "Google AppSheet",
            "Google Looker",
            "Google Apps Script",
            "Gmail Productivity",
            "Google Drive",
            "Microsoft Excel"
          ]
        },
        {
          "title": "SAP",
          "topics": [
            "SAP S/4HANA",
            "SAP Materials Management (SAP MM)",
            "SAP ABAP",
            "SAP Business Technology Platform (SAP BTP)",
            "SAP Sales and Distribution (SAP SD)",
            "SAP FICO",
            "SAP HCM",
            "SAP Analytics Cloud"
          ]
        },
        {
          "title": "Oracle",
          "topics": [
            "Oracle Primavera",
            "Oracle SQL",
            "Oracle Fusion HCM",
            "PL/SQL",
            "Oracle Database",
            "Database Administration",
            "Project Management",
            "Oracle ERP",
            "Oracle E-Business Suite"
          ]
        },
        {
          "title": "Other Office Productivity",
          "topics": [
            "ChatGPT",
            "Python",
            "Programming Fundamentals",
            "Generative AI (GenAI)",
            "Notion Workspace",
            "Prompt Engineering",
            "ServiceNow",
            "Automation",
            "Typing"
          ]
        }
      ]
    },
    {
      "title": "Personal Development",
      subcategories: [
        {
          name: "Personal Transformation",
          subcategories: [
            "Life Coach Training",
            "Neuro-Linguistic Programming (NLP)",
            "Personal Development",
            "Sound Therapy",
            "Horsemanship",
            "Mindfulness",
            "Coaching",
            "Life Purpose"
          ]
        },
        {
          name: "Personal Productivity",
          subcategories: [
            "ChatGPT",
            "Time Management",
            "Notion Workspace",
            "Speed Reading",
            "Obsidian App",
            "Organizational Skills",
            "Writing",
            "Procrastination",
            "Focus Mastery"
          ]
        },
        {
          name: "Memory and Study Skills",
          subcategories: [
            "Memory",
            "Speed Reading",
            "Learning Strategies",
            "Study Skills",
            "Focus Mastery",
            "Mind Mapping",
            "Critical Thinking",
            "Artificial Intelligence (AI)",
            "Obsidian App"
          ]
        },
        {
          name: "Motivation",
          subcategories: [
            "Neuroplasticity",
            "English Grammar",
            "Neuro-Linguistic Programming (NLP)",
            "Coaching",
            "Manifestation and Law of Attraction",
            "Procrastination",
            "Personal Development",
            "Philosophy"
          ]
        },
        {
          name: "Other Personal Management",
          subcategories: [
            "Project Development",
            "Freight Brokering",
            "Public Speaking",
            "Personal Development",
            "Hypnotherapy",
            "Sound Therapy",
            "Lucid Dreaming",
            "Life Coach Training",
            "Car Repair"
          ]
        },
        {
          name: "Leadership",
          subcategories: [
            "Management Skills",
            "Manager Training",
            "Coaching",
            "Communication Skills",
            "Conflict Management",
            "Public Speaking",
            "Relationship Building",
            "Decision Making"
          ]
        },
        {
          name: "Career Development",
          subcategories: [
            "Interviewing Skills",
            "Job Search",
            "Resume and CV Writing",
            "Business Communication",
            "IT / Technical Support",
            "Business Writing",
            "Car Repair",
            "Building Inspection"
          ]
        },
        {
          name: "Parenting & Relationships",
          subcategories: [
            "Parenting",
            "Relationship Building",
            "Generative AI (GenAI)",
            "Couples Counseling",
            "Child Psychology",
            "Marriage",
            "Love",
            "Autism",
            "Dating"
          ]
        },
        {
          name: "Happiness",
          subcategories: [
            "Life Coach Training",
            "Manifestation and Law of Attraction",
            "Cognitive Behavioral Therapy (CBT)",
            "Neuro-Linguistic Programming (NLP)",
            "Positive Psychology",
            "Mindfulness",
            "Psychology",
            "Personal Success"
          ]
        },
        {
          name: "Esoteric Practices",
          subcategories: [
            "Reiki",
            "Energy Healing",
            "Tarot Reading",
            "Astrology",
            "Spiritual Healing",
            "Hypnotherapy",
            "Psychic",
            "Chakra",
            "Akashic Records"
          ]
        },
        {
          name: "Religion & Spirituality",
          subcategories: [
            "Spirituality",
            "Tarot Reading",
            "Energy Healing",
            "Life Coach Training",
            "Mindfulness",
            "Reiki",
            "Spiritual Healing",
            "The Bible",
            "Numerology"
          ]
        },
        {
          name: "Personal Brand Building",
          subcategories: [
            "Personal Branding",
            "Meetings",
            "LinkedIn",
            "Career Development",
            "Personal Networking",
            "Business Strategy",
            "Amazon Kindle Direct Publishing (KDP)",
            "Audiobook Creation",
            "Public Speaking"
          ]
        },
        {
          name: "Creativity",
          subcategories: [
            "Creative Writing",
            "Screenwriting and Scriptwriting",
            "Art Therapy",
            "Writing a Book",
            "Storytelling",
            "Writing",
            "Novel Writing",
            "Fiction Writing",
            "Self-Publishing"
          ]
        },
        {
          name: "Influence",
          subcategories: [
            "Voice Training",
            "Communication Skills",
            "Persuasion",
            "Negotiation",
            "Public Speaking",
            "Body Language",
            "English Grammar",
            "Presentation Skills",
            "Influence Skills"
          ]
        },
        {
          name: "Self Esteem & Confidence",
          subcategories: [
            "Confidence",
            "Self-Esteem",
            "Communication Skills",
            "Psychotherapy",
            "Personal Development",
            "Social Skills",
            "Family Constellations Therapy",
            "Public Speaking",
            "Dance"
          ]
        },
        {
          name: "Stress Management",
          subcategories: [
            "Anxiety Management",
            "Emotional Intelligence",
            "Resilience",
            "Coaching",
            "Anger Management",
            "Grief Healing",
            "Mindfulness",
            "Work Life Balance"
          ]
        }
      ]
    },
    {
      "title": "Design",
      subcategories: [
        {
          name: "Web Design",
          subcategories: [
            "Mobile App Design",
            "WordPress",
            "CSS",
            "Figma",
            "User Interface Design",
            "Elementor",
            "Banner Design",
            "HTML"
          ]
        },
        {
          name: "Graphic Design & Illustration",
          subcategories: [
            "Graphic Design",
            "Canva",
            "Adobe Photoshop",
            "Drawing",
            "Adobe Illustrator",
            "Procreate Digital Illustration App",
            "Design Theory",
            "Digital Painting",
            "Adobe InDesign"
          ]
        },
        {
          name: "Design Tools",
          subcategories: [
            "AutoCAD",
            "Midjourney",
            "SOLIDWORKS",
            "Figma",
            "Adobe After Effects",
            "Procreate Digital Illustration App",
            "AI Art Generation",
            "Adobe Photoshop",
            "Canva"
          ]
        },
        {
          name: "User Experience Design",
          subcategories: [
            "User Experience (UX) Design",
            "Figma",
            "UX Writing (User Experience Writing)",
            "User Interface Design",
            "Generative AI (GenAI)",
            "Product Design",
            "Web Accessibility",
            "Design Thinking",
            "Adobe XD"
          ]
        },
        {
          name: "Game Design",
          subcategories: [
            "Pixel Art",
            "Unreal Engine",
            "Unity",
            "Blender",
            "VFX (Visual Effects)",
            "3D Environment Modeling",
            "Digital Painting",
            "3D Modeling"
          ]
        },
        {
          name: "3D & Animation",
          subcategories: [
            "Blender",
            "3D Modeling",
            "Adobe After Effects",
            "Autodesk Fusion",
            "Motion Graphics",
            "3D Printing",
            "3D Animation",
            "zBrush",
            "Unreal Engine"
          ]
        },
        {
          name: "Fashion Design",
          subcategories: [
            "Pattern Making (Fashion)",
            "Sewing",
            "Fashion",
            "3D Fashion Design",
            "Jewelry Design",
            "Jewelry Making",
            "Adobe Illustrator",
            "Textiles"
          ]
        },
        {
          name: "Architectural Design",
          subcategories: [
            "Revit",
            "AutoCAD",
            "Building Information Modeling (BIM)",
            "SketchUp",
            "LEED",
            "3D Modeling",
            "ARCHICAD",
            "Blender"
          ]
        },
        {
          name: "Interior Design",
          subcategories: [
            "SketchUp",
            "Color Theory",
            "Blender",
            "Lighting Design",
            "Home Staging",
            "Electrical Engineering",
            "Revit",
            "Electricity"
          ]
        },
        {
          name: "Other Design",
          subcategories: [
            "Electronics",
            "PCB Design",
            "Drawing",
            "Stable Diffusion",
            "Geometric Dimensioning and Tolerancing (GD&T)",
            "AutoCAD",
            "CATIA",
            "Microservices",
            "Software Architecture"
          ]
        }
      ]
    },
    {
      title: "Marketing",
      subcategories: [
        "Digital Marketing",
        "Search Engine Optimization",
        "Social Media Marketing",
        "Branding",
        "Marketing Fundamentals",
        "Marketing Analytics & Automation",
        "Public Relations",
        "Paid Advertising",
        "Video & Mobile Marketing",
        "Content Marketing",
        "Growth Hacking",
        "Affiliate Marketing",
        "Product Marketing",
        "Other Marketing",
      ],
    },
    {
      title: "Lifestyle",
      subcategories: [
        "Arts & Crafts",
        "Beauty & Makeup",
        "Esoteric Practices",
        "Food & Beverage",
        "Gaming",
        "Home Improvement & Gardening",
        "Pet Care & Training",
        "Travel",
        "Other Lifestyle",
      ],
    },
    {
      title: "Photography & Video",
      subcategories: [
        "Digital Photography",
        "Photography",
        "Portrait Photography",
        "Photography Tools",
        "Commercial Photography",
        "Video Design",
        "Other Photography & Video",
      ],
    },
    {
      title: "Health & Fitness",
      subcategories: [
        "Fitness",
        "General Health",
        "Sports",
        "Nutrition & Diet",
        "Yoga",
        "Mental Health",
        "Martial Arts & Self Defense",
        "Safety & First Aid",
        "Dance",
        "Meditation",
        "Other Health & Fitness",
      ],
    },
    {
      title: "Music",
      subcategories: [
        "Instruments",
        "Music Production",
        "Music Fundamentals",
        "Vocal",
        "Music Techniques",
        "Music Software",
        "Other Music",
      ],
    },
    {
      title: "Teaching & Academics",
      subcategories: [
        "Engineering",
        "Humanities",
        "Math",
        "Science",
        "Online Education",
        "Social Science",
        "Language Learning",
        "Teacher Training",
        "Test Prep",
        "Other Teaching & Academics",
      ],
    },
  ];

  return (
    <div className="relative group">
      {/* Botão que ativa o menu */}
      <button
        className="text-lg font-semibold hover:text-gray-700 focus:outline-none"
        onMouseEnter={() => setMenuVisible(true)}
        onMouseLeave={() => setMenuVisible(false)}
      >
        Explore
      </button>

      {/* Menu principal */}
      {menuVisible && (
        <div
          className="absolute z-50 left-0 w-64 bg-white shadow-lg rounded-lg opacity-100"
          onMouseEnter={() => setMenuVisible(true)}
          onMouseLeave={() => setMenuVisible(false)}
        >
          <div className="px-4 pt-4  pb-1 font-bold text-gray-900">Browse Certifications</div>
          <ul className="">
            {menuItems.map((item, index) => (
              <>
                {index === 1 && <hr className="my-2 border-gray-300" />}
                <li
                  key={index}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative text-gray-900 text-sm hover:text-purple-600 cursor-pointer px-4 py-2 ${
                    item.subcategories.length ? "flex justify-between items-center" : ""
                  }`}
                >
                  {item.title}
                  {item.subcategories.length > 0 && (
                    <span className="text-gray-500">&#8250;</span>
                  )}
                  {hoveredItem === index && item.subcategories.length > 0 && (
                    <div
                      className="absolute top-0 left-full bg-white shadow-lg rounded-lg"
                      style={{
                        minHeight: "100%",
                        width: "100%",
                      }}
                    >
                      <ul className="p-4">
                        {item.subcategories.map((subcategory, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-gray-700 text-sm hover:text-purple-600 cursor-pointer px-4 py-2"
                          >
                            {typeof subcategory === "string" ? (
                              subcategory
                            ) : (
                              <>
                                <strong>{subcategory.group}</strong>
                                <ul className="ml-4">
                                  {subcategory.items.map((subItem, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="text-gray-600 hover:text-purple-500"
                                    >
                                      {subItem}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExploreMenu;
