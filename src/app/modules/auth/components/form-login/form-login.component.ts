import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
import { NotificationsDeliveryService } from '../../../../core/services/notifications/notifications-delivery.service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent implements OnInit {
  isPass: boolean = true;
  isLoading: boolean = false;

  icons = {
    eye: faEye,
    slash: faEyeSlash,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private notifier: NotificationsDeliveryService
  ) {}

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

    this.isLoading = true;
    this.authService
      .onLogin(payload)
      .subscribe(({ user }) => {
        localStorage.setItem('token', user.token);
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);

        this.notifier.success('Login realizado com sucesso!')

        this.router.navigate(['/']);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
