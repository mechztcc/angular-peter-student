import { Component, OnInit, afterRender } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBook,
  faCalendar,
  faDiamond,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import { WindowService } from '../../services/window/window.service';
import { IUser } from '../../../modules/auth/shared/interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  providers: [WindowService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  today = new Date().toLocaleString();
  icons = {
    diamond: faDiamond,
    questions: faBook,
    game: faGamepad,
    calendar: faCalendar,
  };

  user: IUser = {
    email: 'email@email.com',
    name: 'Nome',
    role: 'STUDENT',
    token: null,
  };

  constructor(private windowService: WindowService) {
    afterRender(() => {
      const localStorage = this.windowService.getWindow().localStorage;
      this.user = {
        email: localStorage.getItem('email'),
        name: localStorage.getItem('name'),
        role: 'STUDENT',
        token: null,
      };
    });
  }

  ngOnInit(): void {}

  get isAuth() {
    const window = this.windowService.getWindow();

    return (
      window.location.href.includes('login') ||
      window.location.href.includes('create')
    );
  }
}
