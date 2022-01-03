export interface Option {
  optionTitle: string;
  correct: boolean;
  checked: boolean;
}

export interface Question {
  question: string;
  hasMultiple: boolean;
  options: Option[];
}

export interface Quiz {
  questions: Question[];
}
