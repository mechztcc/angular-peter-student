import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlternativeButtonComponent } from '../../../../core/components/alternative-button/alternative-button.component';
import { WindowService } from '../../../../core/services/window/window.service';
import { LessonsService } from '../../shared/services/lessons.service';

@Component({
  selector: 'app-question-scaffold',
  standalone: true,
  imports: [AlternativeButtonComponent, RouterModule],
  templateUrl: './question-scaffold.component.html',
  styleUrl: './question-scaffold.component.scss',
})
export class QuestionScaffoldComponent implements OnInit {
  @Input() info: any;

  constructor(
    private routes: ActivatedRoute,
    private lessonsService: LessonsService,
    private windowService: WindowService
  ) {}

  ngOnInit(): void {
    const { id } = this.routes.params['_value'];
    this.lessonsService
      .onVerifyRunningLesson(id)
      .subscribe((data) => {
        if (data.done) {
          console.log(this.windowService.getLocation());
        }
      })
      .add(() => {});
  }
}
