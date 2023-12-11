import { HttpInterceptorFn } from '@angular/common/http';

export const HttpHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);

  return next(req);
};
