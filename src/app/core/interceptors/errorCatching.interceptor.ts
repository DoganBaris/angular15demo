import { SnackBar } from 'src/app/utilities/snackBar';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { SnacBarType } from '../../common/enum/snacBarType';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private snackBar: SnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.status === 403) {
            this.snackBar.openSnackBar("Not Authorized!", undefined, SnacBarType.Warning)
          }
          // if (error.error instanceof ErrorEvent) {
          //   console.log('This is client side error');
          //   errorMsg = `Error: ${error.error.message}`;
          // } else {
          //   console.log('This is server side error');
          //   errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          // }
          // console.log(errorMsg);
          return throwError(() => new Error(errorMsg));
        })
      );
  }
}