import { Component } from '@angular/core';
import { CardJoinTeamComponent } from '../../components/card-join-team/card-join-team.component';
import { CardTeamMemberComponent } from '../../components/card-team-member/card-team-member.component';

@Component({
  selector: 'app-ranking-page',
  standalone: true,
  imports: [CardJoinTeamComponent, CardTeamMemberComponent],
  templateUrl: './ranking-page.component.html',
  styleUrl: './ranking-page.component.scss'
})
export class RankingPageComponent {

}
