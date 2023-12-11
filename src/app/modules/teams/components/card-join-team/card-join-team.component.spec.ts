import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJoinTeamComponent } from './card-join-team.component';

describe('CardJoinTeamComponent', () => {
  let component: CardJoinTeamComponent;
  let fixture: ComponentFixture<CardJoinTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardJoinTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardJoinTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
