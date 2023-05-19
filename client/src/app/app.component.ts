import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoaded: boolean;
  isAuthenticated: boolean;
  isError: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.isLoaded = false;
    this.isAuthenticated = false;
    this.isError = false;
  }

  ngOnInit() {
    this.authService.verify()
      .subscribe(data => {
        this.isAuthenticated = data === '/';
        this.isLoaded = true;
      },
      error => {
        this.isError = true;
        this.router.navigate(['/error', {error}]).then();
        this.isLoaded = true;
      });
  }
}
