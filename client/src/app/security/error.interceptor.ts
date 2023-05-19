import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
      private router: Router,
      private authService: AuthService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authService.clear()
                  .subscribe(
                    () => {location.reload();},
                    error => {return throwError(error);}
                  );
            } else if (Math.floor(err.status / 100) === 5) {
                this.router.navigate(['/error', {error: err.statusText || err.message}]).then();
            }
            const errorMessage = err.statusText || err.message;
            return throwError(errorMessage);
        }))
    }
}
