import { Component, OnInit } from '@angular/core';
import { ChartScoreComponent } from '../../components/chart-score/chart-score.component';
import { CardLessonsAvailableComponent } from '../../components/card-lessons-available/card-lessons-available.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import { CardNotFoundLessonsComponent } from '../../components/card-not-found-lessons/card-not-found-lessons.component';
import { LessonsService } from '../../../lessons/shared/services/lessons.service';
import { ILesson } from '../../../lessons/shared/interfaces/lesson.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ChartScoreComponent,
    CardLessonsAvailableComponent,
    FontAwesomeModule,
    CardNotFoundLessonsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  icons = {
    lesson: faScroll,
  };

  lessons: ILesson[] = [];
  isLoading: boolean = false;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.onFindLessons();
  }

  onFindLessons() {
    this.isLoading = true;
    this.lessonsService
      .onFindLessons()
      .subscribe((data) => {
        this.lessons = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
