import { Component } from '@angular/core';
import { CardJoinTeamComponent } from '../../components/card-join-team/card-join-team.component';

@Component({
  selector: 'app-ranking-page',
  standalone: true,
  imports: [CardJoinTeamComponent],
  templateUrl: './ranking-page.component.html',
  styleUrl: './ranking-page.component.scss'
})
export class RankingPageComponent {

}
