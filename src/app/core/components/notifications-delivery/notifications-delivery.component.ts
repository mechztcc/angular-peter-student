import { Component } from '@angular/core';
import {
  faCheckCircle,
  faExclamationTriangle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { NotificationsDeliveryService } from '../../services/notifications/notifications-delivery.service';
import { fade } from '../../animations/fade.animation';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-notifications-delivery',
  standalone: true,
  templateUrl: './notifications-delivery.component.html',
  styleUrls: ['./notifications-delivery.component.scss'],
  imports: [FontAwesomeModule, NgClass, CommonModule],
})
export class NotificationsDeliveryComponent {
  constructor(public store: NotificationsDeliveryService) {}

  icons = {
    ok: faCheckCircle,
    close: faTrash,
    error: faExclamationTriangle,
  };
}
