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
