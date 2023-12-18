import { Injectable } from '@angular/core';
import { LessonsService } from './lessons.service';
import { ActivatedRoute } from '@angular/router';
import { IquestionHistoryInformation } from '../interfaces/question-history-information.interface';

@Injectable({
  providedIn: 'root',
})
export class LessonRunnerService {
  questions: any[] = [];
  isLoading: boolean = false;

  activated: number = 0;
  done: boolean = false;

  historyInfo: IquestionHistoryInformation = {
    lessonId: 0,
    answers: []
  };

  constructor(private lessonsService: LessonsService) {}

  prev() {
    if (this.activated > 0) {
      this.activated--;
    }
  }

  next() {
    if (this.activated < this.questions.length - 1) {
      this.activated++;
    } else {
      this.done = true;
    }
  }

  find(id: number) {
    this.isLoading = true;
    this.lessonsService
      .onFindLesson(id)
      .subscribe((data) => {
        this.questions = data['QuestionsOnLessons'];
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
