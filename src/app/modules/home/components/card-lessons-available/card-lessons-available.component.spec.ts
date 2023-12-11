import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLessonsAvailableComponent } from './card-lessons-available.component';

describe('CardLessonsAvailableComponent', () => {
  let component: CardLessonsAvailableComponent;
  let fixture: ComponentFixture<CardLessonsAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLessonsAvailableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardLessonsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
