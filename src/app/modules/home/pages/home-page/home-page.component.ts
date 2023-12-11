import { Component } from '@angular/core';
import { ChartScoreComponent } from '../../components/chart-score/chart-score.component';
import { CardLessonsAvailableComponent } from '../../components/card-lessons-available/card-lessons-available.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import { CardNotFoundLessonsComponent } from '../../components/card-not-found-lessons/card-not-found-lessons.component';

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
export class HomePageComponent {
  icons = {
    lesson: faScroll,
  };
}
