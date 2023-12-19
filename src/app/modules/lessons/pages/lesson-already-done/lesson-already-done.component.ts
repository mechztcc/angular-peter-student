import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lesson-already-done',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './lesson-already-done.component.html',
  styleUrl: './lesson-already-done.component.scss',
})
export class LessonAlreadyDoneComponent {
  icons = {
    game: faGamepad,
  };
}
