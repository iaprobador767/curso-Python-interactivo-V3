
export interface Exercise {
  description: string;
  template: string;
  solution: string;
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface Quiz {
  question: string;
  options: QuizOption[];
}

export interface Lesson {
  id: string;
  title: string;
  theory: string; // Can contain HTML
  example: string; // Python code example
  exercise: Exercise;
  quiz: Quiz;
}

export type CompletedLessons = Set<string>;

export enum OutputType {
  Default = 'default',
  Success = 'success',
  Error = 'error',
  Loading = 'loading',
  Info = 'info',
}
