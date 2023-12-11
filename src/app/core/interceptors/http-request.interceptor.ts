import { HttpInterceptorFn } from '@angular/common/http';

export const HttpHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);

  req = req.clone({ url: `http://localhost:3000/${req.url}` });

  return next(req);
};
