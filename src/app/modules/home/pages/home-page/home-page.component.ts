import { Component } from '@angular/core';
import { ChartScoreComponent } from '../../components/chart-score/chart-score.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ChartScoreComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
