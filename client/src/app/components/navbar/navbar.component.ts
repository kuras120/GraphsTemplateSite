import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() queryEmitter = new EventEmitter<string>();
  query: string;

  constructor() { }

  onChange(_event: any) {
    this.queryEmitter.emit(this.query);
    console.log(this.query);
  }

  ngOnInit() { }
}
