import { NgClass } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { LessonRunnerService } from '../../../modules/lessons/shared/services/lesson-runner.service';

@Component({
  selector: 'app-alternative-button',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './alternative-button.component.html',
  styleUrl: './alternative-button.component.scss',
})
export class AlternativeButtonComponent implements OnDestroy {
  timer: any;
  @Input() alternative: any;

  isValid: boolean = false;
  alert: boolean = false;

  icons = {
    check: faCheck,
    wrong: faClose,
  };

  constructor(private store: LessonRunnerService) {}

  onValidate() {
    this.alert = true;
    this.isValid = true;
    this.timer = setTimeout(() => {
      this.alert = false;
      this.store.next();
    }, 3000);
  }

  ngOnDestroy(): void {}
}
