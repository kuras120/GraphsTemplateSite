import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.error = this.route.snapshot.paramMap.get('error');
  }
}
