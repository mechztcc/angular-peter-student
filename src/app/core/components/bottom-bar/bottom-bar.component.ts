import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartSimple, faHome, faRightFromBracket, faScroll, faUsers } from '@fortawesome/free-solid-svg-icons';
import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  providers: [WindowService],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss',
})
export class BottomBarComponent {
  constructor(private windowService: WindowService) {}

  get isAuth() {
    const window = this.windowService.getWindow();

    return (
      window.location.href.includes('login') ||
      window.location.href.includes('create')
    );
  }

  icons = {
    home: faHome,
    lessons: faScroll,
    teams: faUsers,
    rank: faChartSimple,
    exit: faRightFromBracket
  };
}
