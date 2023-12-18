import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlternativeButtonComponent } from '../../../../core/components/alternative-button/alternative-button.component';
import { LessonsService } from '../../shared/services/lessons.service';
import { QuestionScaffoldComponent } from '../../components/question-scaffold/question-scaffold.component';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question-page',
  standalone: true,
  imports: [
    FontAwesomeModule,
    AlternativeButtonComponent,
    QuestionScaffoldComponent,
  ],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.scss',
})
export class QuestionPageComponent implements OnInit {
  questions: any[] = [];
  isLoading: boolean = false;

  icons = {
    left: faChevronLeft,
    right: faChevronRight,
  };

  activated: number = 0;

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

  prev() {
    if (this.activated > 0) {
      this.activated--;
    }
  }

  next() {
    if (this.activated < this.questions.length -1) {
      this.activated++;
    }
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
