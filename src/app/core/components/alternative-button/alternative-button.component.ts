import { NgClass } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { LessonRunnerService } from '../../../modules/lessons/shared/services/lesson-runner.service';
import { LessonsService } from '../../../modules/lessons/shared/services/lessons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alternative-button',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './alternative-button.component.html',
  styleUrl: './alternative-button.component.scss',
})
export class AlternativeButtonComponent implements OnDestroy {
  @Input() alternative: any;

  timer: any;
  isValid: boolean = false;
  alert: boolean = false;

  icons = {
    check: faCheck,
    wrong: faClose,
  };

  constructor(
    private store: LessonRunnerService,
    private lessonsService: LessonsService,
    private routes: ActivatedRoute
  ) {}

  onValidate() {
    this.alert = true;
    this.isValid = true;
    const payload = {
      lessonId: Number(this.routes.params['_value'].id),
      done: false,
      answer: {
        alternativeId: this.alternative.id,
        isCorrect: this.alternative.isCorrect,
        questionId: this.alternative.questionId,
      },
    };

    this.lessonsService.onComputingResults(payload).subscribe((data) => {
      console.log(data);

      this.timer = setTimeout(() => {
        this.alert = false;
        this.isValid = false;
        this.store.next();
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    this.alternative = null;
    this.isValid = false;
  }
}
