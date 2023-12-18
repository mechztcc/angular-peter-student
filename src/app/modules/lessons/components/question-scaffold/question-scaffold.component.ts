import { Component, Input, OnInit } from '@angular/core';
import { AlternativeButtonComponent } from '../../../../core/components/alternative-button/alternative-button.component';
import { ActivatedRoute } from '@angular/router';
import { LessonRunnerService } from '../../shared/services/lesson-runner.service';

@Component({
  selector: 'app-question-scaffold',
  standalone: true,
  imports: [AlternativeButtonComponent],
  templateUrl: './question-scaffold.component.html',
  styleUrl: './question-scaffold.component.scss',
})
export class QuestionScaffoldComponent implements OnInit {
  @Input() info: any;
  constructor(
    private routes: ActivatedRoute,
    private store: LessonRunnerService
  ) {}

  ngOnInit(): void {
    const { id } = this.routes.params['_value'];
    this.store.historyInfo.lessonId = id;
  }
}
