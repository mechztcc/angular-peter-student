import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlternativeButtonComponent } from '../../../../core/components/alternative-button/alternative-button.component';
import { LessonsService } from '../../shared/services/lessons.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-page',
  standalone: true,
  imports: [FontAwesomeModule, AlternativeButtonComponent],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.scss',
})
export class QuestionPageComponent implements OnInit {
  questions: any[] = [];
  isLoading: boolean = false;

  response: {
    alternativeId: number;
    isCorrect: boolean;
  };

  constructor(
    private lessonsService: LessonsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.find();
  }

  onSubmitAlternative(alternativeId: number) {
    const { id } = this.routes.params['_value'];

    const payload = {
      lessonId: Number(id),
      alternativeId: alternativeId,
      questionId: this.questions[0].questionId,
    };

    this.isLoading = true;
    this.lessonsService
      .onVerifyAnswer(payload)
      .subscribe((data) => {
        this.response = {
          alternativeId: payload.alternativeId,
          isCorrect: data['isCorrect'],
        };
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  find() {
    this.isLoading = true;
    const { id } = this.routes.params['_value'];
    this.lessonsService
      .onFindLesson(id)
      .subscribe((data) => {
        this.questions = data['QuestionsOnLessons'];
        console.log(this.questions);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
