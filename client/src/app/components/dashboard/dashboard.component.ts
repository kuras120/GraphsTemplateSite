import { Component, OnInit } from '@angular/core';
import { Graph } from 'src/app/models/graph.model';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Graphs Template Site';
  query = { name: '' };
  graphs: Graph[];

  constructor(private graphService: GraphService) { }

  ngOnInit() {
    this.getGraphs();
  }

  setQuery(value: string) {
    this.query.name = value;
  }

  getGraphs() {
    this.graphService.list().subscribe(
      response => {
        this.graphs = response;
      },
      error => console.error(error),
      () => console.log('Graphs loaded')
    );
  }
}
