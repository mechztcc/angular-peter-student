import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alternative-button',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './alternative-button.component.html',
  styleUrl: './alternative-button.component.scss',
})
export class AlternativeButtonComponent {
  @Input() alternative: any;

  isValid: boolean = false;

  icons = {
    check: faCheck,
    wrong: faClose,
  };

  onValidate() {
    this.isValid = true;
  }
}
