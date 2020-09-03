import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {Token} from '../models/token.model';
import { environment } from 'src/environments/environment';
import {CookieService} from 'ngx-cookie-service';


@Injectable({ providedIn: 'root' })
export class AuthService {

  public token: Observable<string>;
  public countdown: Observable<number>;
  private tokenSubject: BehaviorSubject<string>;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this.tokenSubject = new BehaviorSubject<string>(cookieService.get('token'));
    this.countdown = this.setTimer(cookieService.get('token'));
    this.token = this.tokenSubject.asObservable();
  }

  public get timer(): Observable<number> {
    return this.countdown;
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

  public setTimer(cookie: string) {
    if (cookie) {
      let remainingTime = AuthService.toObject(cookie).payload.exp - Math.floor(Date.now()/1000);
      return remainingTime > 0 ? timer(0, 1000).pipe(
        take(remainingTime),
        map(() => -- remainingTime)
      ) : null;
    }
  }

  public authenticate(username: string, password: string): Observable<string> {
    return this.http.post<any>(`${environment.api}/token/`, { username, password })
      .pipe(map(data => {
        return this.initializeVariables(data);
      }));
  }

  public refresh(): Observable<string> {
    return this.http.post<any>(`${environment.api}/token/refresh/`, { token: this.tokenValue })
      .pipe(map(data => {
        return this.initializeVariables(data);
      }));
  }

  public clear() {
    this.cookieService.delete('token');
    this.tokenSubject.next(null);
  }

  private initializeVariables(data): string {
    this.cookieService.set('token', data.token);
    this.tokenSubject.next(data.token);
    this.countdown = this.setTimer(data.token);
    return data.token;
  }
}
