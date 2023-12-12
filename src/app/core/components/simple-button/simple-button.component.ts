import { Component, Input, booleanAttribute } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './simple-button.component.html',
  styleUrl: './simple-button.component.scss',
})
export class SimpleButtonComponent {
  @Input({ transform: booleanAttribute }) loading: boolean = false;

  icons = {
    load: faCircleNotch,
  };
}
