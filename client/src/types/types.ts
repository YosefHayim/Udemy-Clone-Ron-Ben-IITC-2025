export interface DummyData {
  code: string;
  name: string;
  count: number;
}

export interface FilterProps {
  filterTitle: string;
  filterItems: DummyData[];
  chosenHeight: string;
  display: boolean;
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

export interface SearchResultsProps {
  isTyping: Boolean;
  data: SearchResultsArray[];
}
