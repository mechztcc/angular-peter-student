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
import { PerformancesService } from '../../../modules/performances/shared/services/performances.service';
import { IGeneralPerformance } from '../../../modules/performances/shared/types/general-performance.interface';

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

  isLoading: boolean = false;
  info: IGeneralPerformance;

  constructor(
    private windowService: WindowService,
    private performancesService: PerformancesService
  ) {}

  ngOnInit(): void {
    this.findPerformance();
  }

  findPerformance() {
    this.isLoading = true;
    this.performancesService
      .onGeneralPerformances()
      .subscribe((data) => {
        this.info = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  get isAuth() {
    const window = this.windowService.getWindow();

    return (
      window.location.href.includes('home') ||
      window.location.href.includes('teams')
    );
  }
}
