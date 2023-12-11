import { Component } from '@angular/core';
import { FormCreateAccountComponent } from '../../components/form-create-account/form-create-account.component';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormCreateAccountComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss',
})
export class CreateAccountComponent {}
