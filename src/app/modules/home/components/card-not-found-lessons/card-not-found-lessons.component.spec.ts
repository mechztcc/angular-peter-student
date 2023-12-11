import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotFoundLessonsComponent } from './card-not-found-lessons.component';

describe('CardNotFoundLessonsComponent', () => {
  let component: CardNotFoundLessonsComponent;
  let fixture: ComponentFixture<CardNotFoundLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNotFoundLessonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardNotFoundLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
