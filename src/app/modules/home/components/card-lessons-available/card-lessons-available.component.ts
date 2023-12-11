import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-lessons-available',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card-lessons-available.component.html',
  styleUrl: './card-lessons-available.component.scss',
})
export class CardLessonsAvailableComponent {

  icons = {
    lesson: faScroll
  }


}
