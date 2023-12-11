import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../shared/services/auth.service';
import { NotificationsDeliveryService } from '../../../../core/services/notifications/notifications-delivery.service';

@Component({
  selector: 'app-form-create-account',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-create-account.component.html',
  styleUrl: './form-create-account.component.scss',
})
export class FormCreateAccountComponent {
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
      name: ['', Validators.required],
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
      name: this.formControls['name'].value,
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
      role: 'STUDENT',
    };
    
    this.isLoading = true;
    this.authService
      .onCreateAccount(payload)
      .subscribe((data) => {
        this.router.navigate(['/login']);
        this.notifier.success('Conta criada com sucesso!')

      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
