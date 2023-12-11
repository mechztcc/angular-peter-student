import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-create-account',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './form-create-account.component.html',
  styleUrl: './form-create-account.component.scss',
})
export class FormCreateAccountComponent {
  isPass: boolean = true;

  icons = {
    eye: faEye,
    slash: faEyeSlash,
  };
}
