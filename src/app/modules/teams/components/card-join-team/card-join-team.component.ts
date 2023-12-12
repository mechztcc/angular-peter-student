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
import { SimpleButtonComponent } from '../../../../core/components/simple-button/simple-button.component';

@Component({
  selector: 'app-card-join-team',
  standalone: true,
  imports: [
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleButtonComponent,
  ],
  templateUrl: './card-join-team.component.html',
  styleUrl: './card-join-team.component.scss',
})
export class CardJoinTeamComponent implements OnInit {
  icons = {
    hash: faHashtag,
  };

  form: FormGroup;

  isLoading: boolean = false;

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
    this.isLoading = true;
    const code = this.form.controls['code'].value;
    this.teamsService
      .onJoinTeam(code)
      .subscribe((data) => {})
      .add(() => {
        this.isLoading = false;
      });
  }
}
