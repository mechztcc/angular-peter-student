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
import { LessonRunnerService } from '../../shared/services/lesson-runner.service';

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
  icons = {
    left: faChevronLeft,
    right: faChevronRight,
  };

  response: {
    alternativeId: number;
    isCorrect: boolean;
  };

  constructor(
    public store: LessonRunnerService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { id } = this.routes.params['_value'];

    this.store.find(id);
  }
}
