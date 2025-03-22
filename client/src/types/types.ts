export interface DummyData {
  code?: string;
  name?: string;
  count?: number;
}

export interface FilterProps {
  setFilterData?:
    | boolean
    | React.Dispatch<React.SetStateAction<FilterDataProps>>;
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

export interface DataOfUser {
  fName: string;
  lName: string;
  headline: string;
  bio: string;
  website: string;
  xPlatform: string;
  youtube: string;
  linkedin: string;
  facebook: string;
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
}

export interface searchResultCourseImgProps {
  courseName: string;
  instructorName: string;
  courseImg: string;
  courseId: string;
}

export type SearchResultProps = {
  algoWord: string;
  courseId: string;
};

export interface SearchResultsArray {
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
    response: SearchResultsArray[];
  };
  response?: ResultProps;
}

export interface ReportUserReviewPayload {
  reviewId: string;
  issueType?: string;
  issueDetails?: string;
  userId?: string;
}

export interface RegisterUserPayload {
  fullName: string;
  email: string;
}

export type AtagBtnProps = {
  aTagName: string;
};

export interface CourseImgProps {
  courseImg: string;
  widthChosen: string;
  standCardView: boolean;
  imgExplanation: string;
}

export interface CourseInstructorProps {
  instructor?: string;
  shortCutInstructor?: boolean;
}

export interface CoursePriceProps {
  discountPrice?: number | string;
  fullPrice?: number | string;
  chooseFlex?: string;
  discountPriceSize?: string;
  showFullPrice?: boolean;
}

export interface CourseRatingsProps {
  avgRatings?: number;
  stars?: string;
  totalRatings?: number;
}

export interface CourseTagProps {
  tagName?: string;
  bgColorTag?: string;
}

export interface CourseTitleProps {
  title?: string;
  shortcutTitle?: boolean;
}

export interface CourseCardProps {
  title: string;
  image: string;
  description: string;
  fullPrice: number;
  discountPrice: number;
  tag?: string;
}

export interface CourseProps {
  _id: string;
  courseName: string;
  courseImg: string;
  courseDescription: string;
  courseFullPrice: number;
  courseDiscountPrice: number;
}

export interface ResponseSuggestions {
  word: string;
  score: number;
}

export interface CourseData {
  _id: string;
  courseName: string;
  category: string;
  subCategory: string;
  courseTopic: string;
  courseRecapInfo: string;
  courseTag: string;
  averageRating: number;
  totalRatings: number;
  totalStudentsEnrolled: { count: number };
  courseInstructor: {
    _id: string;
    fullName: string;
    headline: string;
    profilePic: string;
  };
  updatedAt: string;
  courseLanguages: string[];
  whatYouWillLearn: string[];
  sections: { lessons: { _id: string }[] }[];
  totalCourseDuration: string;
  totalCourseLessons: number;
  courseRequirements: string[];
  courseDescription: string;
  whoThisCourseIsFor: string[];
  courseImg: string;
  courseDiscountPrice: number;
  courseFullPrice: number;
  reviews: any[];
}

export interface LoaderProps {
  hSize: string;
  useSmallLoading: boolean;
  paddingSetTo?: string;
  usePurpleLoading?: boolean;
  useSmallBlackLoading?: boolean;
  purpleLightSmallStyle?: boolean;
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
}

export type FormErrors = {
  email?: string;
  password?: string;
};

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

export interface CoursePreviewCardProps {
  courseImg: string;
  coursePrice: number;
  fullPrice: number;
  courseId: string;
  firstLessonId?: string;
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

export interface FilterDataProps {
  sortBy: "";
  searchTerm: string;
  certificateOnly: boolean;
  handsOnPractice: Set<string>;
  language: Set<string>;
  levels: Set<string>;
  price: "";
  ratings: number;
  subtitles: Set<string>;
  topics: Set<string>;
  videosDurations: Set<string>;
}

export interface SidebarFilterProps {
  filterData?: FilterDataProps;
  setFilterData?: React.Dispatch<React.SetStateAction<FilterDataProps>>;
}

export interface CourseTypeProps {
  _id: string;
  category: string;
  courseDescription: string;
  courseDiscountPrice: number;
  courseFullPrice: number;
  courseImg: string;
  courseInstructor: {
    _id: string;
    fullName: string;
    profilePic: string;
  };
  courseInstructorDescription: string;
  courseLanguages: string;
  courseLevel: string;
  courseName: string;
  courseRecapInfo: string;
  courseRequirements: string[];
  courseTag: string;
  courseTopic: string;
  courseTrailer: string;
  createdAt: string;
  updatedAt: Date;
  isActive: boolean;
  moneyBackGuarantee: string;
  reviews: Array<string>;
  sections: Array<{
    [key: string]: any;
  }>;
  subCategory: string;
  totalCourseDuration: number;
  totalCourseLessons: number;
  totalCourseSections: number;
  totalRatings: number;
  totalStudentsEnrolled: {
    students: Array<string>;
    count: number;
  };
  whatYouWillLearn: string[];
  whoThisCourseIsFor: string;
  averageRating: number;
}

export interface CourseBasicInfoProps {
  lastUpdated: Date;
  courseLanguage: string;
}

export interface CourseContentProps {
  description: string;
  whoThisFor: string[];
  requirements: string[];
  totalCourseDuration: number; // in minutes
  totalCourseLessons: number;
  totalCourseSections: number;
  sectionsOfCourse: Array<{
    _id: string;
    title: string;
    lessons: Array<{
      title: string;
      duration: number; // in minutes
      isPreviewAvailable: boolean;
    }>;
  }>;
}

export interface CourseCreatedByProps {
  instructorName: string;
  instructorId: string;
}

export interface LessonProps {
  _id?: string;
  title?: string;
  videoUrl?: string;
  duration?: number;
}

export interface SearchCourseCardProps {}

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

export interface GoogleAuthResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
}

//progress

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

// Optional: Define the type for the mutation payload
export interface LessonProgressPayload {
  completed?: boolean;
  lastWatched?: number;
}
