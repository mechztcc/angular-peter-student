export interface IquestionHistoryInformation {
  lessonId: number;
  answers?: [{ alternativeId?: number; isCorrect?: boolean; questionId?: number }] | any;
}
