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
      title: "Office Productivity",
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
      title: "Personal Development",
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
      title: "Design",
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
        {
          name: "Digital Marketing",
          subcategories: [
            "Marketing Strategy",
            "Social Media Marketing",
            "Internet Marketing",
            "ChatGPT",
            "Google Analytics",
            "Copywriting",
            "Sales Funnel",
            "Startup"
          ]
        },
        {
          name: "Search Engine Optimization",
          subcategories: [
            "Search Engine Optimization (SEO)",
            "WordPress",
            "Keyword Research",
            "Google Business Profile (Google My Business)",
            "Local SEO",
            "SEO Audit",
            "Link Building",
            "ChatGPT",
            "SEMrush"
          ]
        },
        {
          name: "Social Media Marketing",
          subcategories: [
            "Instagram Marketing",
            "Social Media Management",
            "Facebook Ads",
            "Facebook Marketing",
            "TikTok Marketing",
            "YouTube Marketing",
            "Canva",
            "PPC Advertising"
          ]
        },
        {
          name: "Branding",
          subcategories: [
            "YouTube Audience Growth",
            "YouTube Marketing",
            "Business Branding",
            "Brand Management",
            "Personal Branding",
            "Marketing Strategy",
            "DaVinci Resolve",
            "Online Course Marketing",
            "Product Management"
          ]
        },
        {
          name: "Marketing Fundamentals",
          subcategories: [
            "Marketing Strategy",
            "Copywriting",
            "Marketing Psychology",
            "Digital Marketing",
            "Event Planning",
            "Marketing Management",
            "ChatGPT",
            "Psychology",
            "Market Research"
          ]
        },
        {
          name: "Marketing Analytics & Automation",
          subcategories: [
            "Google Analytics",
            "HubSpot",
            "Marketing Analytics",
            "Google Tag Manager",
            "Data Analysis",
            "Marketo",
            "Custom GPTs/GPT Builder",
            "Google Analytics Individual Qualification (IQ)",
            "Marketing Automation"
          ]
        },
        {
          name: "Public Relations",
          subcategories: [
            "Canva",
            "Communication Skills",
            "Podcasting",
            "Media Training",
            "Storytelling",
            "Public Speaking",
            "Business Communication",
            "Grant Writing"
          ]
        },
        {
          name: "Paid Advertising",
          subcategories: [
            "Google Ads (Adwords)",
            "Google Ads Certification",
            "Facebook Ads",
            "PPC Advertising",
            "Retargeting",
            "YouTube Marketing",
            "Advertising Strategy",
            "Copywriting",
            "Email Marketing"
          ]
        },
        {
          name: "Video & Mobile Marketing",
          subcategories: [
            "YouTube Marketing",
            "YouTube Audience Growth",
            "Video Creation",
            "PowerPoint",
            "InVideo",
            "Generative AI (GenAI)",
            "Video Marketing",
            "Video Production",
            "Video Editing"
          ]
        },
        {
          name: "Growth Hacking",
          subcategories: [
            "Digital Marketing",
            "Marketing Strategy",
            "Passive Income",
            "App Marketing",
            "Account-Based Marketing (ABM)",
            "ChatGPT",
            "Facebook Ads",
            "YouTube Audience Growth"
          ]
        },
        {
          name: "Content Marketing",
          subcategories: [
            "AI Content Generation",
            "Content Writing",
            "Copywriting",
            "Writing",
            "Blogging",
            "Content Creation",
            "Social Media Marketing",
            "ChatGPT"
          ]
        },
        {
          name: "Affiliate Marketing",
          subcategories: [
            "ClickBank",
            "Google Ads (Adwords)",
            "Amazon Affiliate Marketing",
            "Marketing Strategy",
            "Search Engine Optimization (SEO)",
            "Generative AI (GenAI)",
            "Pinterest Marketing",
            "Influencer Marketing"
          ]
        },
        {
          name: "Product Marketing",
          subcategories: [
            "Amazon Kindle Direct Publishing (KDP)",
            "SaaS",
            "Self-Publishing",
            "Product Management",
            "Book Marketing",
            "Generative AI (GenAI)",
            "Voice-Over",
            "Marketing Strategy"
          ]
        },
        {
          name: "Other Marketing",
          subcategories: [
            "Copywriting",
            "ChatGPT",
            "Conversion Rate Optimization (CRO)",
            "Marketing Strategy",
            "Event Planning",
            "Digital Marketing",
            "Research Paper Writing",
            "Google Tag Manager",
            "Marketing Psychology"
          ]
        }
      ]
    },
    {
      "title": "Lifestyle",
      subcategories: [
        {
          name: "Arts & Crafts",
          subcategories: [
            "Drawing",
            "Watercolor Painting",
            "Acrylic Painting",
            "Figure Drawing",
            "Painting",
            "Sketching",
            "Candle Making",
            "Soapmaking",
            "Oil Painting"
          ]
        },
        {
          name: "Beauty & Makeup",
          subcategories: [
            "Beauty",
            "Makeup Artistry",
            "Skincare",
            "Nail Artistry",
            "Perfume",
            "Hair Styling",
            "Cosmetics",
            "Beauty Business",
            "Face Lift"
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
          name: "Food & Beverage",
          subcategories: [
            "Cooking",
            "Coffee",
            "Pastry",
            "Cocktails and Bartending",
            "Sourdough Bread Baking",
            "Bread Baking",
            "Wine Appreciation and Oenology",
            "Baking",
            "Cake Baking"
          ]
        },
        {
          name: "Gaming",
          subcategories: [
            "Chess",
            "Poker",
            "eSports",
            "Open Broadcaster",
            "Twitch",
            "Fortnite",
            "League of Legends",
            "Character Design"
          ]
        },
        {
          name: "Home Improvement & Gardening",
          subcategories: [
            "Woodworking and Carpentry",
            "Electricity",
            "Home Repair",
            "Gardening",
            "Electrical Wiring",
            "Mushroom Cultivation",
            "Farming",
            "Hydroponics",
            "Organizational Skills"
          ]
        },
        {
          name: "Pet Care & Training",
          subcategories: [
            "Dog Training",
            "Dog Care",
            "Horsemanship",
            "Dog Behavior",
            "Pet Training",
            "Pet Care",
            "Animal Nutrition",
            "Veterinary Medicine",
            "Cat Behavior"
          ]
        },
        {
          name: "Travel",
          subcategories: [
            "Travel Tips",
            "Travel Writing",
            "Travel Business",
            "Airbnb Hosting",
            "Portuguese Language",
            "Digital Nomad",
            "Immigration",
            "Working Abroad"
          ]
        },
        {
          name: "Other Lifestyle",
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
      "title": "Photography & Video",
      subcategories: [
        {
          name: "Digital Photography",
          subcategories: [
            "iPhone Photography",
            "Photography",
            "Digital Camera Functionality",
            "Affinity Photo",
            "Mobile Photography",
            "Adobe Lightroom",
            "GIMP",
            "Adobe Photoshop"
          ]
        },
        {
          name: "Photography",
          subcategories: [
            "Photography Composition",
            "Mobile Photography",
            "Product Photography",
            "Digital Photography",
            "Night Photography",
            "Landscape Photography",
            "Street Photography",
            "Food Photography"
          ]
        },
        {
          name: "Portrait Photography",
          subcategories: [
            "Photography Lighting",
            "Posing",
            "Photography",
            "Photoshop Retouching",
            "Family Portrait Photography",
            "Image Editing",
            "Video Editing",
            "Photography Business"
          ]
        },
        {
          name: "Photography Tools",
          subcategories: [
            "Adobe Lightroom",
            "Adobe Photoshop",
            "Image Editing",
            "Digital Camera Functionality",
            "Affinity Photo",
            "Photoshop Retouching",
            "Drone and Aerial Photography",
            "Photography",
            "GIMP"
          ]
        },
        {
          name: "Commercial Photography",
          subcategories: [
            "Real Estate Photography",
            "Architecture Photography",
            "Photography Business",
            "Photoshop Retouching",
            "Wedding Photography",
            "Product Photography",
            "Photography",
            "Food Photography",
            "Drone and Aerial Photography"
          ]
        },
        {
          name: "Video Design",
          subcategories: [
            "Video Editing",
            "Adobe Premiere Pro",
            "Video Production",
            "DaVinci Resolve",
            "Adobe After Effects",
            "CapCut",
            "Unreal Engine",
            "Color Grading",
            "Filmmaking"
          ]
        },
        {
          name: "Other Photography & Video",
          subcategories: [
            "Generative AI (GenAI)",
            "YouTube Audience Growth",
            "iPhone Photography",
            "Photography",
            "AI Content Generation",
            "Drone and Aerial Photography",
            "Video Editing",
            "Video Creation",
            "Filmmaking"
          ]
        }
      ]
    }
    ,
    {
      "title": "Health & Fitness",
      subcategories: [
        {
          name: "Fitness",
          subcategories: [
            "Pilates",
            "Teacher Training",
            "Personal Trainer Business",
            "Home Workout",
            "Muscle Building",
            "Strength Training",
            "Stretching Exercise",
            "Boxing"
          ]
        },
        {
          name: "General Health",
          subcategories: [
            "Massage",
            "Herbalism",
            "Facial Massage",
            "Breathing Techniques",
            "Reflexology",
            "Natural Medicine",
            "Aromatherapy",
            "Health",
            "Holistic Medicine"
          ]
        },
        {
          name: "Sports",
          subcategories: [
            "Soccer",
            "Sport Psychology",
            "Swimming",
            "Tennis",
            "Sports Coaching",
            "Golf",
            "Sports Massage",
            "Sports Management",
            "Running"
          ]
        },
        {
          name: "Nutrition & Diet",
          subcategories: [
            "Nutrition",
            "Dieting",
            "Health Coach Training",
            "Weight Loss",
            "Gut Health",
            "Sports Nutrition",
            "Vegan Cooking",
            "Ketogenic Diet",
            "Face Yoga"
          ]
        },
        {
          name: "Yoga",
          subcategories: [
            "Pranayama",
            "Chair Yoga",
            "Breathing Techniques",
            "Yoga for Kids",
            "Ayurveda",
            "Prenatal Yoga",
            "Face Yoga",
            "Tantra"
          ]
        },
        {
          name: "Mental Health",
          subcategories: [
            "Cognitive Behavioral Therapy (CBT)",
            "Somatic Therapy",
            "Psychotherapy",
            "Art Therapy",
            "Acceptance and Commitment Therapy (ACT)",
            "Trauma-Informed Care",
            "Dialectical Behavior Therapy (DBT)",
            "Psychology"
          ]
        },
        {
          name: "Martial Arts & Self Defense",
          subcategories: [
            "Martial Arts",
            "Self-Defense",
            "Krav Maga",
            "Tai Chi",
            "Brazilian Jiu-Jitsu",
            "Boxing",
            "Close Combat",
            "Wing Chun",
            "Karate"
          ]
        },
        {
          name: "Safety & First Aid",
          subcategories: [
            "First Aid",
            "Workplace Health and Safety",
            "OSHA",
            "Herbalism",
            "Public Health",
            "Survival Skills",
            "Fire Safety",
            "Advanced Trauma Life Support (ATLS)",
            "Dog Care"
          ]
        },
        {
          name: "Dance",
          subcategories: [
            "Salsa Dancing",
            "Belly Dancing",
            "Bachata",
            "Hip Hop Dancing",
            "Ballet",
            "Tango Dance",
            "Poi Spinning"
          ]
        },
        {
          name: "Meditation",
          subcategories: [
            "Mindfulness",
            "Sound Therapy",
            "Counseling",
            "Reiki",
            "Breathing Techniques",
            "Qigong",
            "Mental Health"
          ]
        },
        {
          name: "Other Health & Fitness",
          subcategories: [
            "Massage",
            "Sports Massage",
            "Facial Massage",
            "Qigong",
            "Medical Coding",
            "Spiritual Healing",
            "Medical Terminology",
            "Beauty",
            "Kinesiology Taping"
          ]
        }
      ]
    },
    {
      "title": "Music",
      subcategories: [
        {
          name: "Instruments",
          subcategories: [
            "Guitar",
            "Piano",
            "Keyboard Instrument",
            "Bass Guitar",
            "Drums",
            "Piano Chords",
            "Violin",
            "Ukulele",
            "Harmonica"
          ]
        },
        {
          name: "Music Production",
          subcategories: [
            "Ableton Live",
            "FL Studio",
            "Logic Pro",
            "Music Mixing",
            "Audio Engineering",
            "Music Composition",
            "Sound Design",
            "Audio Production"
          ]
        },
        {
          name: "Music Fundamentals",
          subcategories: [
            "Music Theory",
            "Music Composition",
            "Songwriting",
            "Electronic Music",
            "Reading Music",
            "Ear Training",
            "Piano",
            "Harmony (music)",
            "Piano Chords"
          ]
        },
        {
          name: "Vocal",
          subcategories: [
            "Singing",
            "Voice Training",
            "Voice Acting",
            "Meditation",
            "Raga Music",
            "Rapping",
            "Yoga",
            "Breathing Techniques",
            "Voice-Over"
          ]
        },
        {
          name: "Music Techniques",
          subcategories: [
            "DJ",
            "Reading Music",
            "Music Composition",
            "Fingerstyle Guitar",
            "Piano",
            "Music Theory",
            "Guitar",
            "Music Improvisation",
            "Piano Chords"
          ]
        },
        {
          name: "Music Software",
          subcategories: [
            "FL Studio",
            "Logic Pro",
            "Music Theory",
            "Ableton Live",
            "Music Production",
            "GarageBand",
            "DJ",
            "Sound Design",
            "Cubase"
          ]
        },
        {
          name: "Other Music",
          subcategories: [
            "DJ",
            "Music Business",
            "Songwriting",
            "Sound Therapy",
            "Music Marketing",
            "Rapping",
            "Luthiery",
            "Music Mixing",
            "Acoustics"
          ]
        }
      ]
    }
    ,
    {
      "title": "Teaching & Academics",
      subcategories: [
        {
          name: "Engineering",
          subcategories: [
            "Electrical Engineering",
            "Mechanical Engineering",
            "Electricity",
            "Civil Engineering",
            "Electronics",
            "Solar Energy",
            "Automotive Engineering",
            "Power Engineering",
            "Electrical Design"
          ]
        },
        {
          name: "Humanities",
          subcategories: [
            "Philosophy",
            "Art History",
            "Statistics",
            "World History",
            "Christianity",
            "Critical Thinking",
            "Creative Writing",
            "Cognitive Behavioral Therapy (CBT)",
            "Autism"
          ]
        },
        {
          name: "Math",
          subcategories: [
            "Calculus",
            "Statistics",
            "Linear Algebra",
            "Algebra",
            "Probability",
            "Trigonometry",
            "Geometry",
            "Discrete Math"
          ]
        },
        {
          name: "Science",
          subcategories: [
            "Physics Anatomy",
            "Medical Coding",
            "Chemistry",
            "General Chemistry",
            "Biology",
            "Quantum Mechanics (physics)",
            "Certified Professional Coder (CPC)",
            "Organic Chemistry"
          ]
        },
        {
          name: "Online Education",
          subcategories: [
            "Online Course Creation",
            "Instructional Design",
            "Teaching Online",
            "Project Management",
            "Canva",
            "Moodle",
            "Coding For Kids",
            "ChatGPT",
            "Passive Income"
          ]
        },
        {
          name: "Social Science",
          subcategories: [
            "Psychology",
            "Macroeconomics",
            "Counseling",
            "Econometrics",
            "Economics",
            "Criminology",
            "Psychotherapy",
            "Intelligence Analysis (security)",
            "Cognitive Behavioral Therapy (CBT)"
          ]
        },
        {
          name: "Language Learning",
          subcategories: [
            "English Language",
            "German Language",
            "Spanish Language",
            "English Grammar",
            "French Language",
            "Japanese Language",
            "English Conversation",
            "English Vocabulary",
            "Arabic Language"
          ]
        },
        {
          name: "Teacher Training",
          subcategories: [
            "Train the Trainer",
            "Early Childhood Education",
            "English Language",
            "Classroom Management",
            "Instructional Design",
            "Generative AI (GenAI)",
            "Voice-Over",
            "Coaching"
          ]
        },
        {
          name: "Test Prep",
          subcategories: [
            "IELTS",
            "TOEFL",
            "PMI Project Management Professional (PMP)",
            "Statistics",
            "Test Taking Skills",
            "Canadian English Language Proficiency Index Program (CELPIP)",
            "PMI PMBOK",
            "English Language",
            "CCAT"
          ]
        },
        {
          name: "Other Teaching & Academics",
          subcategories: [
            "Research Methods",
            "Medical Coding",
            "Proofreading",
            "Medical Billing",
            "Research Paper Writing",
            "Academic Writing",
            "Sewing",
            "Chess",
            "Clinical Research"
          ]
        }
      ]
    }
    ,
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
