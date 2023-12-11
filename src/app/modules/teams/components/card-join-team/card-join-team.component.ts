import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { TeamsService } from '../../shared/services/teams.service';

@Component({
  selector: 'app-card-join-team',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, ReactiveFormsModule],
  templateUrl: './card-join-team.component.html',
  styleUrl: './card-join-team.component.scss',
})
export class CardJoinTeamComponent implements OnInit {
  icons = {
    hash: faHashtag,
  };

  form: FormGroup;

  constructor(private fb: FormBuilder, private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      code: ['', Validators.required],
    });
  }

  onSubmit() {
    const code = this.form.controls['code'].value;
    this.teamsService.onJoinTeam(code).subscribe(console.log);
  }
}
