import { Component } from '@angular/core';
import { ChartScoreComponent } from '../../components/chart-score/chart-score.component';
import { CardLessonsAvailableComponent } from '../../components/card-lessons-available/card-lessons-available.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ChartScoreComponent,
    CardLessonsAvailableComponent,
    FontAwesomeModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  icons = {
    lesson: faScroll,
  };
}
