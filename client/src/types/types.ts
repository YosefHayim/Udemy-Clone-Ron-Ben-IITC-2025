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
  fullName: string;
  email: string;
  password: string;
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
  instructor: string;
  shortCutInstructor: boolean;
}

export interface CoursePriceProps {
  discountPrice: number;
  fullPrice: number;
  chooseFlex: string;
  discountPriceSize: string;
  showFullPrice: boolean;
}

export interface CourseRatingsProps {
  avgRatings: string;
  stars: string;
  totalRatings: string;
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
