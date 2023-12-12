import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-team-member',
  standalone: true,
  imports: [],
  templateUrl: './card-team-member.component.html',
  styleUrl: './card-team-member.component.scss',
})
export class CardTeamMemberComponent {
  @Input()
  member: { name: string; id: number; score: number };
}
