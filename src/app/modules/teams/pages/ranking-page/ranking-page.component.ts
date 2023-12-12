import { Component, OnInit } from '@angular/core';
import { CardJoinTeamComponent } from '../../components/card-join-team/card-join-team.component';
import { CardTeamMemberComponent } from '../../components/card-team-member/card-team-member.component';
import { TeamsService } from '../../shared/services/teams.service';
import { IUser } from '../../../auth/shared/interfaces/user.interface';
import { ITeam } from '../../shared/interfaces/team.interface';

@Component({
  selector: 'app-ranking-page',
  standalone: true,
  imports: [CardJoinTeamComponent, CardTeamMemberComponent],
  templateUrl: './ranking-page.component.html',
  styleUrl: './ranking-page.component.scss',
})
export class RankingPageComponent implements OnInit {
  isLoading: boolean = false;

  info: { user: IUser; teams: ITeam[] } = { user: null, teams: []};

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.onFindTeams();
  }

  onFindTeams() {
    this.isLoading = true;
    this.teamsService
      .onFindTeam()
      .subscribe((data) => {
        this.info = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
