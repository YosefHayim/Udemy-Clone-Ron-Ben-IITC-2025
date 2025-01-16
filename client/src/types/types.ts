export interface DummyData {
  code: string;
  name: string;
  count: number;
}

export interface FilterProps {
  setFilterData: boolean;
  filterData: boolean;
  filterTitle: string;
  filterItems: DummyData[];
  chosenHeight: string;
  display: boolean;
  useForSection: boolean;
  showLine: boolean;
  hideIcons: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
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
  courseName: String;
  instructorName: String;
  courseImg: String;
  courseId: String;
}

export type SearchResultProps = {
  algoWord: string;
  courseId: String;
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
  isTyping: Boolean;
  data: SearchResultsArray[];
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
  avgRatings?: string;
  stars?: string;
  totalRatings?: string;
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
  fullPrice: string;
  discountPrice: string;
  tag: string;
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
  title?: string;
  name?: string;
  subcategories?: string[] | Subcategory[];
  topics?: string[];
}

interface GroupedSubcategory {
  group: string;
  items: Subcategory[];
}

export interface MenuItemProps {
  title: string;
  subcategories: (GroupedSubcategory | Subcategory)[];
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
  general?: string;
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
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  isActive: boolean;
  moneyBackGuarantee: string; // ISO date string
  reviews: Array<unknown>; // You can replace `unknown` with a specific review type if available
  sections: Array<{
    // Replace with specific section type if known
    [key: string]: any;
  }>;
  subCategory: string;
  totalCourseDuration: number; // in minutes
  totalCourseLessons: number;
  totalCourseSections: number;
  totalRatings: number;
  totalStudentsEnrolled: {
    students: Array<unknown>; // Replace `unknown` with the appropriate student type
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
  whoThisFor: string;
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
  _id: string;
  title: string;
  videoUrl: string;
  duration: number;
}
