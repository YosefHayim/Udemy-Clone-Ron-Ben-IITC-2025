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

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UserState {
  fullName: string;
  profilePic: string;
  email: string;
  bio: string;
  role: string;
  coursesBought: string[];
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
  response: ResultProps;
}

export interface ReportUserReviewPayload {
  reviewId: string;
  issueType?: string;
  issueDetails?: string;
  userId?: string;
}

export interface RegisterUserPayload {
  fullName?: string;
  email?: string;
  password?: string;
  [key: string]: any;
}

export type AtagBtnProps = {
  aTagName: string;
};

export interface CourseImgProps {
  courseImg: string;
  widthChosen: string;
}

export interface CourseInstructorProps {
  instructor?: string;
  shortCutInstructor?: boolean;
}

export interface CoursePriceProps {
  discountPrice?: number;
  fullPrice?: number;
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

export interface LoaderProps {
  hSize: string;
  useSmallLoading: boolean;
}

interface Subcategory {
  title?: string; // Subcategory title
  name?: string; // Alternative name for the subcategory
  topics?: string[]; // List of topics within the subcategory
}

interface GroupedSubcategory {
  group: string; // Group name
  items: Subcategory; // Array of subcategories
}

export interface MenuItemProps {
  title: string; // Title of the menu item
  subcategories: (GroupedSubcategory | Subcategory | string)[]; // Allow mixed types, including strings
}

export interface DecodedTokenProps {
  fullName: string;
  profilePic: string;
  email: string;
  bio: string;
  role: string;
  coursesBought: string[];
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
}

export interface Review {
  _id: string;
  comment: string;
  createdAt: string;
  rating: number;
  user: {
    _id: string;
    fullName: string;
  };
}

export interface FilterDataProps {
  certificate: boolean;
  handsOnPractice: string;
  language: string[];
  level: string;
  price: string;
  rating: number;
  subtitles: string;
  topics: string;
  videoDuration: number;
}

export interface SidebarFilterProps {
  filterData: FilterDataProps;
  setFilterData: React.Dispatch<React.SetStateAction<FilterDataProps>>;
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
  updatedAt: string;
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
