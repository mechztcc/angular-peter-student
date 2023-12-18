import { Injectable } from '@angular/core';
import { LessonsService } from './lessons.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LessonRunnerService {
  questions: any[] = [];
  isLoading: boolean = false;

  activated: number = 0;

  constructor(
    private lessonsService: LessonsService,
  ) {}

  prev() {
    if (this.activated > 0) {
      this.activated--;
    }
  }

  next() {
    if (this.activated < this.questions.length - 1) {
      this.activated++;
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
