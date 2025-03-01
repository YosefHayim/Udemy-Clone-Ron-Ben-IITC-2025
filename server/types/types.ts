import mongoose from "mongoose";

export enum SubscriptionPlan {
  Monthly = "monthly",
  Yearly = "yearly",
}

export enum IssueTypes {
  harmfulVioletHateful = "Inappropriate Course Content - Harmful, Violent, Hateful, or Criminal",
  CourseContentOther = "Inappropriate Course Content - Other",
  InappropriateBehavior = "Inappropriate Behavior",
  UdemyPolicyViolation = "Udemy Policy Violation",
  SpammyContent = "Spammy Content",
  Other = "Other",
}

export enum CourseLevels {
  English = "English",
  Other = "Other",
  German = "German",
  French = "French",
  Spanish = "Spanish",
}

export enum CourseCategory {
  Development = "Development",
  Business = "Business",
  FinanceAndAccounting = "Finance & Accounting",
  ITAndSoftware = "IT & Software",
  Design = "Design",
  Marketing = "Marketing",
  Lifestyle = "Lifestyle",
  PersonalDevelopment = "Personal Development",
  Teaching = "Teaching",
}

export enum CourseSubCategory {
  // Development Subcategories
  WebDevelopment = "Web Development",
  DataScience = "Data Science",
  MobileDevelopment = "Mobile Development",
  GameDevelopment = "Game Development",
  SoftwareDevelopment = "Software Development",

  // Business Subcategories
  Entrepreneurship = "Entrepreneurship",
  Communication = "Communication",
  ProjectManagement = "Project Management",
  BusinessAnalytics = "Business Analytics",
  Sales = "Sales",

  // Finance & Accounting Subcategories
  AccountingBookkeeping = "Accounting & Bookkeeping",
  InvestingTrading = "Investing & Trading",
  PersonalFinance = "Personal Finance",

  // IT & Software Subcategories
  ITCertifications = "IT Certifications",
  NetworkSecurity = "Network & Security",
  Hardware = "Hardware",
  SoftwareEngineeringTools = "Software Engineering Tools",

  // Design Subcategories
  GraphicDesign = "Graphic Design",
  UIUXDesign = "UI/UX Design",
  ThreeDAnimation = "3D & Animation",
  InteriorDesign = "Interior Design",

  // Marketing Subcategories
  DigitalMarketing = "Digital Marketing",
  Branding = "Branding",
  AnalyticsAutomation = "Analytics & Automation",
  AffiliateMarketing = "Affiliate Marketing",

  // Lifestyle Subcategories
  ArtsCrafts = "Arts & Crafts",
  HealthFitness = "Health & Fitness",
  TravelHobbies = "Travel & Hobbies",
  Music = "Music",

  // Personal Development Subcategories
  Productivity = "Productivity",
  CareerDevelopment = "Career Development",
  ConfidenceSelfEsteem = "Confidence & Self-Esteem",

  // Teaching Subcategories
  InstructionalDesign = "Instructional Design",
  TeachingTools = "Teaching Tools",
  AcademicSubjects = "Academic Subjects",
}

export enum CourseTopic {
  // Web Development Topics
  JavaScript = "JavaScript",
  HTML = "HTML",
  CSS = "CSS",
  React = "React",
  NodeJS = "Node.js",
  Django = "Django",
  PHP = "PHP",
  RubyOnRails = "Ruby on Rails",

  // Data Science Topics
  Python = "Python",
  R = "R",
  SQL = "SQL",
  MachineLearning = "Machine Learning",
  DeepLearning = "Deep Learning",
  DataVisualization = "Data Visualization",

  // Mobile Development Topics
  Swift = "Swift",
  Kotlin = "Kotlin",
  Flutter = "Flutter",
  ReactNative = "React Native",
  AndroidDevelopment = "Android Development",
  iOSDevelopment = "iOS Development",

  // Business Topics
  BusinessStrategy = "Business Strategy",
  Leadership = "Leadership",
  Startups = "Startups",
  Freelancing = "Freelancing",

  // Finance Topics
  StockTrading = "Stock Trading",
  Cryptocurrency = "Cryptocurrency",
  Options = "Options",
  ForexTrading = "Forex Trading",

  // IT & Software Topics
  Cybersecurity = "Cybersecurity",
  EthicalHacking = "Ethical Hacking",
  NetworkAdministration = "Network Administration",
  PenetrationTesting = "Penetration Testing",

  // Graphic Design Topics
  Photoshop = "Photoshop",
  Illustrator = "Illustrator",
  Canva = "Canva",
  InDesign = "InDesign",
  CorelDRAW = "CorelDRAW",

  // Marketing Topics
  SEO = "SEO",
  GoogleAds = "Google Ads",
  ContentMarketing = "Content Marketing",
  SocialMediaMarketing = "Social Media Marketing",
}

export enum resourceTypes {
  PDF = "PDF",
  Video = "Video",
  Image = "Image",
  Link = "Link",
}

export interface UserDocument {
  _id?: mongoose.Types.ObjectId;
  fullName: string;
  headline: string;
  bio: string;
  country: string;
  preferredLanguage: string;
  personalizeField: {
    whatFieldYouLearningFor: string;
    doYouManagePeople: string;
    whatOccupation: string;
    iCantFindMyOccupation: string;
    whatSkillsAreYouInterestedIn: string[];
  };
  links: {
    website: string;
    xPlatform: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  email: string;
  emailVerified: boolean;
  emailVerificationToken?: string;
  emailVerificationExpires?: Date;
  profilePic: string;
  authProvider: string;
  role: "student" | "instructor";
  temporaryCode?: number | undefined;
  temporaryCodeExpiresAt?: Date | undefined;
  active: boolean;
  udemyCredits: number;
  subscriptionPlan: {
    type: SubscriptionPlan;
    subscriptionPrice: number;
    isSubscriptionActive: boolean;
    startDate: Date;
    endDate?: Date;
  };
  wishlistCourses: string[];
  coursesBought: {
    courseName: string;
    courseId: string;
    boughtAt: Date;
    coursePrice: number;
  }[];
  fieldLearning: string[];
  coursesCreated: string[];
  payments: string[];
  certificatesEarned: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface InstructorDocument {
  _id?: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  coursesRelatedIds: mongoose.Types.ObjectId[];
  backgroundOfInstructor?: string;
  avgRatingInstructor: number;
  totalStudents: number;
  totalCourses: number;
  totalReviews: number;
}

export interface ReportReviewDocument {
  _id?: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  review: mongoose.Types.ObjectId;
  issueType: {
    type: IssueTypes;
  };
  issueDetails: string;
}

export interface CommentDocument {
  _id?: mongoose.Types.ObjectId;
  review: mongoose.Types.ObjectId;
  student: mongoose.Types.ObjectId;
  comment: string;
  instructor: mongoose.Types.ObjectId;
}

export interface CourseReviewDocument {
  _id?: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  courseReview: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
  likes: {
    users: mongoose.Types.ObjectId[];
    count: number;
  };
  dislikes: {
    users: mongoose.Types.ObjectId[];
    count: number;
  };
  reports: {
    entries: mongoose.Types.ObjectId[];
    count: number;
  };
}

export interface SectionDocument {
  _id?: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  title: string;
  totalSectionDuration: number;
  totalSectionLessons: number;
  lessons: [
    {
      type: mongoose.Types.ObjectId;
      ref: LessonDocument;
    }
  ];
}

export interface LessonDocument {
  _id?: string;
  section: mongoose.Types.ObjectId;
  title: string;
  videoUrl: string;
  duration: number;
  order: number;
  resources: [
    {
      title: string;
      url: string;
      type: {
        resourceType: resourceTypes;
      };
    }
  ];
  isDone: boolean;
  lastTimeVideoPlayed: number;
}

export interface LessonProgressDocument {
  _id?: mongoose.Types.ObjectId;
  lessonId: mongoose.Types.ObjectId;
  completed: boolean;
  lastWatched: number;
  notes: [
    {
      _id: string;
      seconds: number;
      text: string;
    }
  ];
}

export interface SectionProgressDocument {
  _id?: mongoose.Types.ObjectId;
  sectionId: mongoose.Types.ObjectId;
  lessons: LessonProgressDocument[];
}

export interface CourseProgressDocument {
  _id?: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  sections: SectionProgressDocument[];
}

export interface CourseDocument {
  _id?: string;
  courseName: string;
  courseImg: string;
  courseTrailer: string;
  courseDescription: string;
  sections: SectionDocument[];
  lessons: LessonDocument[];
  reviews: CourseReviewDocument[];
  totalStudentsEnrolled: {
    students: [{ type: mongoose.Types.ObjectId }];
    count: number;
  };
  courseLevel: {
    type: CourseLevels;
  };
  totalCourseDuration: number;
  totalCourseLessons: number;
  whoThisCourseIsFor: string;
  whatYouWillLearn: string[];
  courseRequirements: string;
  courseRecapInfo: string;
  courseFullPrice: number;
  courseDiscountPrice: number;
  category: CourseCategory;
  subCategory: CourseSubCategory;
  courseTopic: CourseTopic;
}

export interface CustomError extends Error {
  code?: number;
  status?: number;
  errors?: { [key: string]: { message: string } };
}

export interface QueryString {
  search?: string;
  sort?: string;
  fields?: string;
  page?: string;
  limit?: string;
  [key: string]: any; // Allow additional properties
}

declare module "express" {
  export interface Request {
    user?: any;
  }
}

export interface Payload {
  id: Object;
  fullName: string;
  data: any;
  email: string;
  profilePic: string;
  bio: string;
  role: string;
  language: string;
  coursesBought: any;
  udemyCredits: number;
  headline: string;
  fieldLearning: string[];
  userLinks: {
    website: string;
    xPlatform: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
}

export interface Token {
  data: any;
}
