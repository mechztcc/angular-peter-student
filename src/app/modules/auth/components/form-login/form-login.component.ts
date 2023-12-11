import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  isPass: boolean = true;

  icons = {
    eye: faEye,
    slash: faEyeSlash,
  };
}
