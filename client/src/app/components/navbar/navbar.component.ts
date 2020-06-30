import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() queryEmitter = new EventEmitter<string>();
  query: string;

  constructor(
    private authService: AuthService
  ) { }

  logout() {
    this.authService.clear();
    location.reload();
  }

  onChange(_event: any) {
    this.queryEmitter.emit(this.query);
    console.log(this.query);
  }

  ngOnInit() { }
}
