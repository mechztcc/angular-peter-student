import { TestBed } from '@angular/core/testing';

import { NotificationsDeliveryService } from './notifications-delivery.service';

describe('NotificationsDeliveryService', () => {
  let service: NotificationsDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
