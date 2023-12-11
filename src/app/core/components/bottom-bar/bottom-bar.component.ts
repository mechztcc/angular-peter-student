import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faScroll, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss'
})
export class BottomBarComponent {

  icons = {
    home: faHome,
    lessons: faScroll,
    teams: faUsers
  }
}
