import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBook,
  faCalendar,
  faDiamond,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  providers: [WindowService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  today = new Date().toLocaleString();
  icons = {
    diamond: faDiamond,
    questions: faBook,
    game: faGamepad,
    calendar: faCalendar,
  };

  constructor(private windowService: WindowService) {
    console.log(this.isAuth);
    
  }

  get isAuth() {
    const window = this.windowService.getWindow();

    return (window.location.href.includes('login') || window.location.href.includes('create'))
    
  }
}
