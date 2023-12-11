import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsDeliveryComponent } from './notifications-delivery.component';

describe('NotificationsDeliveryComponent', () => {
  let component: NotificationsDeliveryComponent;
  let fixture: ComponentFixture<NotificationsDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsDeliveryComponent]
    });
    fixture = TestBed.createComponent(NotificationsDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
