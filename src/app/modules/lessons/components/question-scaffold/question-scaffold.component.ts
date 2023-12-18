import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AlternativeButtonComponent } from '../../../../core/components/alternative-button/alternative-button.component';

@Component({
  selector: 'app-question-scaffold',
  standalone: true,
  imports: [AlternativeButtonComponent],
  templateUrl: './question-scaffold.component.html',
  styleUrl: './question-scaffold.component.scss',
})
export class QuestionScaffoldComponent implements OnChanges {
  @Input() info: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.info);
  }
}
