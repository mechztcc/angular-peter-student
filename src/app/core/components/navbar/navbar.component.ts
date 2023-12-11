import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBook,
  faCalendar,
  faDiamond,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  today = new Date().toLocaleString();
  icons = {
    diamond: faDiamond,
    questions: faBook,
    game: faGamepad,
    calendar: faCalendar
  };
}
