import { HttpInterceptorFn } from '@angular/common/http';

export const HttpHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  req = req.clone({
    url: `http://localhost:3000/${req.url}`,
    setHeaders: {
      Authorization: `${token}`,
    },
  });

  return next(req);
};
