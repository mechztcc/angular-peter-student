import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../shared/services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent implements OnInit {
  isPass: boolean = true;

  icons = {
    eye: faEye,
    slash: faEyeSlash,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const payload = {
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
    };

    this.authService.onLogin(payload).subscribe(console.log);

  }
}
