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

  constructor(
    private lessonsService: LessonsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.find();
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
