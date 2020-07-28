import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // private access: string;
  // constructor(private http: HttpClient, private cookie: CookieService) { }

  ngOnInit() {
  //   this.http.post('http://localhost:8080/api/authenticate', {
  //       email: 'dupa11@gmail.com',
  //       expirationDate: 1626286772000,
  //       subscriptionType: ['Ogłoszenia', 'Spółdzielnie'],
  //       apiKey: '6TBwlxIpsy0NPWExe5H6'
  //     },
  //     { observe: 'response', withCredentials: true }
  //   )
  //     .subscribe(data => {
  //       console.log(data);
  //     });
  // }
  //
  // makeRequest() {
  //   const headers = new HttpHeaders()
  //       .set('Authorization',  'Bearer ' + this.cookie.get('MonitorApiToken'))
  //   this.http.get('http://localhost:8080/api/1',
  //     { observe: 'response', withCredentials: true, headers }
  //   )
  //     .subscribe(data => {
  //       console.log(data);
  //     });
  }
}
