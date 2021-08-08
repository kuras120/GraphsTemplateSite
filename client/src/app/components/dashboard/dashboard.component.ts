import {Component, OnInit, ViewChild} from '@angular/core';
import { Graph } from 'src/app/models/graph.model';
import { GraphService } from 'src/app/services/graph.service';
import {AuthService} from 'src/app/services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Graphs Template Site';
  query = { name: '' };
  graphs: Graph[];

  show: boolean;
  timer: Subscription;
  remainingTime: number;

  @ViewChild('refreshToken') refreshToken;
  @ViewChild('closeModal') closeModal;

  constructor(
    private graphService: GraphService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getGraphs();
    this.subscribeNewTimer();
  }

  subscribeNewTimer() {
    this.show = false;
    this.timer = this.authService.timer.subscribe(remainingTime => {
      if (!remainingTime) {
        this.authService.clear().subscribe(() => {location.reload();});
      }
      if (remainingTime <= 10 && !this.show) {
        this.show = !this.show;
        this.refreshToken.nativeElement.click();
      }
      this.remainingTime = remainingTime;
    });
  }

  setQuery(value: string) {
    this.query.name = value;
  }

  getGraphs() {
    this.graphService.getGraphs().subscribe(
      response => {
        this.graphs = response;
      },
      error => console.error(error)
    );
  }

  getNewToken() {
    this.authService.refresh().subscribe(
      () => {
        this.timer.unsubscribe();
        this.closeModal.nativeElement.click();
        this.subscribeNewTimer();
      },
      () => {
        this.authService.clear()
          .subscribe(() => {location.reload();});
      }
    )
  }
}
