import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionScaffoldComponent } from './question-scaffold.component';

describe('QuestionScaffoldComponent', () => {
  let component: QuestionScaffoldComponent;
  let fixture: ComponentFixture<QuestionScaffoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionScaffoldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionScaffoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
