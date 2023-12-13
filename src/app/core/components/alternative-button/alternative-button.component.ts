import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alternative-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './alternative-button.component.html',
  styleUrl: './alternative-button.component.scss',
})
export class AlternativeButtonComponent {
  @Input() text: string;

  icons = {
    check: faCheck,
    wrong: faClose,
  };
}
