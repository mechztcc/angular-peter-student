import { Component, OnInit } from '@angular/core';
import { LessonRunnerService } from '../../shared/services/lesson-runner.service';

@Component({
  selector: 'app-done-lesson',
  standalone: true,
  imports: [],
  templateUrl: './done-lesson.component.html',
  styleUrl: './done-lesson.component.scss',
})
export class DoneLessonComponent implements OnInit {
  constructor(private store: LessonRunnerService) {}

  ngOnInit(): void {
    console.log(this.store.historyInfo);
  }
}
