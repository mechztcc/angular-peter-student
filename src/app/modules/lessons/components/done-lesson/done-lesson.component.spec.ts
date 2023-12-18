import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneLessonComponent } from './done-lesson.component';

describe('DoneLessonComponent', () => {
  let component: DoneLessonComponent;
  let fixture: ComponentFixture<DoneLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoneLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoneLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
