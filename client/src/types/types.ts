export interface DummyData {
  code?: string;
  name?: string;
  count?: number;
}

export interface FilterProps {
  setFilterData?: boolean | React.Dispatch<React.SetStateAction<FilterDataProps>>;
  filterData?: boolean | FilterDataProps;
  filterTitle: string;
  filterItems?: DummyData[];
  chosenHeight: string;
  display: boolean;
  useForSection: boolean;
  showLine: boolean;
  hideIcons: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface personalizeFieldPayload {
  personalizeField: {
    whatFieldYouLearningFor: string;
    doYouManagePeople: string;
    whatOccupation: string;
    iCantFindMyOccupation: string;
    whatSkillsAreYouInterestedIn: string[];
  };
}

export interface UserState {
  fullName: string;
  headline: string;
  profilePic: string;
  email: string;
  bio: string;
  role: string;
  coursesBought: string[];
  udemyCredits: number;
  cookie: string;
  language: string;
  userLinks: {
    website: string;
    xPlatform: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  isLoggedPreviouslyWithGoogle: boolean;
  isAuthActivated: boolean;
  whenCreated: Date | null | undefined;
  coursesInProgress: [];
}

interface SearchResultsArray {
  _id: string;
  courseName: string;
  courseInstructor: {
    fullName: string;
  };
  courseImg: string;
}

interface ResultProps {
  _id: string;
  courseName: string;
  courseInstructor: {
    fullName: string;
  };
  courseImg: string;
}

export interface SearchResultsProps {
  isTyping: boolean;
  data: {
    response?: SearchResultsArray[];
  };
  response?: ResultProps;
  width: number;
}

export interface RegisterUserPayload {
  fullName: string;
  email: string;
}

export interface CourseData {
  _id: string;
  courseName: string;
  courseImg: string;
  courseTrailer: string;
  courseDescription: string;
  courseRecapInfo: string;
  courseRequirements: string[];
  whoThisCourseIsFor: string;
  whatYouWillLearn: string[];
  courseFullPrice: number;
  courseDiscountPrice: number;
  category: string;
  subCategory: string;
  courseTopic: string;
  courseLevel: string;
  courseLanguages: string;
  courseTag: string;
  moneyBackGuarantee: string;
  averageRating: number;
  totalRatings: number;
  totalStudentsEnrolled: {
    count: number;
    students: string[];
  };
  courseInstructor: {
    _id: string;
    fullName: string;
    headline: string;
    bio: string;
    profilePic: string;
  };
  courseRating: number;
  courseInstructorDescription: string;
  totalCourseDuration: number;
  totalCourseLessons: number;
  totalCourseSections: number;
  isActive: boolean;
  certificateOnly: boolean;
  reviews: {
    _id: string;
    user: {
      _id: string;
      fullName: string;
    };
    courseReview: string;
    rating: number;
    comment: string;
    createdAt: string;
    updatedAt: string;
    likes: {
      users: string[];
      count: number;
    };
    dislikes: {
      users: string[];
      count: number;
    };
    reports: {
      entries: any[];
      count: number;
    };
  }[];
  sections: {
    _id: string;
    course: string;
    title: string;
    totalSectionDuration: number;
    totalSectionLessons: number;
    createdAt: string;
    updatedAt: string;
    lessons: {
      _id: string;
      section: string;
      title: string;
      videoUrl: string;
      duration: number;
      order: number;
      isDone: boolean;
      lastTimeVideoPlayed: number;
      resources: any[];
      createdAt: string;
      updatedAt: string;
    }[];
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// explore data ts
export interface Topic {
  title?: string;
  group?: string;
}

export interface Subcategory {
  title?: string;
  name?: string;
  group?: string;
  items?: Topic[]; // For subcategories containing topics as a list.
  topics?: string[]; // For subcategories containing topics directly as strings.
}

export interface Category {
  category: string;
  subcategory: Subcategory[];
}

export interface ExploreItem {
  title: string;
  topics: string[];
}

export interface ExploreGroup {
  group?: string;
  items: ExploreItem[];
}

export interface ExploreSubcategory {
  name?: string; // Optional for cases like "Photography & Video".
  title?: string; // Optional for subcategories with no `name`.
  group?: string;
  items?: ExploreItem[]; // For subcategories containing grouped items.
  topics?: string[]; // For subcategories with direct topics as strings.
  topic?: string[]; // Optional alternative for subcategories using `topic` instead of `topics`.
}

export interface ExploreCategory {
  category: string;
  subcategory: ExploreSubcategory[];
}

// explore data ts

export interface DecodedTokenProps {
  fullName: string;
  headline: string;
  profilePic: string;
  email: string;
  bio: string;
  role: string;
  coursesBought: string[];
  udemyCredits: number;
  language: string;
  userLinks: {
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
  };
  isLoggedPreviouslyWithGoogle: boolean;
  createdAt: Date | null | undefined;
  updatedAt: Date | null | undefined;
  isAuthActivated: boolean;
}

export interface PaymentOptionProps {
  paymentOptionName?: string;
  providedIcon?: React.ReactNode;
  showVisa?: boolean;
  showProvideCardInfo?: boolean;
  isGooglePay?: boolean;
  isPayPal?: boolean;
  radioName?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export interface Review {
  _id: string;
  comment: string;
  createdAt: Date;
  rating: number;
  user: {
    _id: string;
    fullName: string;
  };
}

interface FilterDataProps {
  sortBy: string;
  searchTerm: string;
  certificateOnly: boolean;
  handsOnPractice: Set<string>;
  language: Set<string>;
  levels: Set<string>;
  price: string;
  ratings: number;
  subtitles: Set<string>;
  topics: Set<string>;
  videosDurations: Set<string>;
}

export interface SidebarFilterProps {
  filterData?: FilterDataProps;
  setFilterData?: React.Dispatch<React.SetStateAction<FilterDataProps>>;
}

export interface Course {
  _id: string;
  courseName: string;
  courseImg: string;
  courseDescription: string;
  courseFullPrice: number;
  courseDiscountPrice: number;
  averageRating: number;
  reviews: any[];
  totalRatings: number;
  courseLevel: string;
  totalCourseDuration: number;
  totalCourseLessons: number;
  courseInstructor: { fullName: string };
  isNew?: boolean;
  isBestseller?: boolean;
}

// Define the type for a lesson
export interface Lesson {
  lessonId: {
    _id: string;
    title: string;
    duration: number; // Duration in minutes
  };
  completed: boolean;
  lastWatched: number; // Timestamp for when the lesson was last watched
}

// Define the type for a section containing lessons
export interface Section {
  sectionId: {
    _id: string;
    title: string;
  };
  lessons: Lesson[];
}

export type Note = {
  _id: string;
  seconds: number;
  text: string;
  lessonIndex: number;
  lessonId: string;
};

// Define the type for the course progress response
export interface CourseProgressResponse {
  progress: {
    sections: Section[];
    totalLessons: number;
    completedLessons: number;
    percentageCompleted: number;
  };
  totalLessons: number;
  completedLessons: number;
  percentageCompleted: number;
}
export interface CourseProgress {
  sections: Section[];
  totalLessons: number;
  completedLessons: number;
  percentageCompleted: number;
}
