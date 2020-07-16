import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //modify or log the outgoing request

    const modifiedReq = req.clone({
      withCredentials: true,
    });

    return next.handle(modifiedReq)
    //.pipe(
    //   tap((val) => {
    //     if (val.type === HttpEventType.Sent) {
    //       console.log('req was sent to server');
    //     }
    //     if (val.type === HttpEventType.Response) {
    //       console.log('req was recieved to server',val);
    //     }
    //   })
    // );
  }
}
