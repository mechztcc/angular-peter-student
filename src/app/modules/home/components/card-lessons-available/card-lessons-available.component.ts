import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import { ILesson } from '../../../lessons/shared/interfaces/lesson.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-lessons-available',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './card-lessons-available.component.html',
  styleUrl: './card-lessons-available.component.scss',
})
export class CardLessonsAvailableComponent {
  @Input() lesson: ILesson;
  
  icons = {
    lesson: faScroll,
  };
}
