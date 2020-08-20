import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Token} from '../models/token.model';
import { environment } from 'src/environments/environment';
import {CookieService} from 'ngx-cookie-service';


@Injectable({ providedIn: 'root' })
export class AuthService {

  public token: Observable<string>;
  private tokenSubject: BehaviorSubject<string>;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this.tokenSubject = new BehaviorSubject<string>(cookieService.get('token'));
    this.token = this.tokenSubject.asObservable();
  }

  public get tokenValue(): string {
    return this.tokenSubject.value;
  }

  public static toObject(token: string): Token {
    if (token == null) return null;
    const divided = token.split('.');
    if (divided.length !== 3) return null;
    const obj = { } as Token;
    obj.header = JSON.parse(atob(divided[0]));
    obj.payload = JSON.parse(atob(divided[1]));
    obj.signature = divided[2];
    return obj;
  }

  authenticate(username: string, password: string): Observable<string> {
    return this.http.post<any>(`${environment.api}/token/`, { username, password })
    .pipe(map(token => {
      this.cookieService.set('token', token);
      this.tokenSubject.next(token);
      return token.access;
    }));
  }

  clear() {
    this.cookieService.delete('token');
    this.tokenSubject.next(null);
  }
}
