import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faScroll, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss'
})
export class BottomBarComponent {

  get isAuth() {
    return (
      window.location.href.includes('login') ||
      window.location.href.includes('create')
    );
  }
  
  icons = {
    home: faHome,
    lessons: faScroll,
    teams: faUsers
  }
}
