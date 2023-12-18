import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonAlreadyDoneComponent } from './lesson-already-done.component';

describe('LessonAlreadyDoneComponent', () => {
  let component: LessonAlreadyDoneComponent;
  let fixture: ComponentFixture<LessonAlreadyDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonAlreadyDoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonAlreadyDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
