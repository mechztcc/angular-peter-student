import {
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { NotificationsDeliveryService } from '../services/notifications/notifications-delivery.service';

export const HttpHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const notifier = inject(NotificationsDeliveryService);

  req = req.clone({
    url: `http://localhost:3000/${req.url}`,
    withCredentials: true,
  });

  return next(req).pipe(
    map((event: HttpEvent<any>) => {
      return event;
    }),
    catchError((response: HttpErrorResponse) => {
      scrollTo(0, 0);
      if (response.error) {
        notifier.error(response.error.message);
      }

      return throwError(() => new Error());
    })
  );
};
