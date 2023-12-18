import { Component, OnInit } from '@angular/core';
import { LessonRunnerService } from '../../shared/services/lesson-runner.service';
import {
  faChevronLeft,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LessonsService } from '../../shared/services/lessons.service';

@Component({
  selector: 'app-done-lesson',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './done-lesson.component.html',
  styleUrl: './done-lesson.component.scss',
})
export class DoneLessonComponent implements OnInit {
  isLoading: boolean = false;

  icons = {
    left: faChevronLeft,
    load: faCircleNotch,
  };

  constructor(
    private store: LessonRunnerService,
    private lessonsService: LessonsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onComputingResults();
  }

  onComputingResults() {
    const { id } = this.routes.params['_value'];
    this.isLoading = true;
    this.lessonsService
      .onCompleteLesson(id)
      .subscribe((data) => {})
      .add(() => {
        this.isLoading = false;
      });
  }
}
