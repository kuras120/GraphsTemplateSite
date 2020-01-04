import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Graph} from './models/graph.model';
import {GraphService} from './services/graph.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Graphs Template Site';
  graphs: Graph[] = [];
  query: string;

  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
    this.graphs.push({graph_name: 'Vertical Bar Chart', type: 'charts-bar-vertical', data: []});
    this.graphs.push({graph_name: 'Vertical Bar Chart Normalized', type: 'charts-bar-vertical-normalized', data: []});
    this.graphs.push({graph_name: 'Horizontal Bar Chart', type: 'charts-bar-horizontal', data: []});
    this.graphs.push({graph_name: 'Horizontal Bar Chart Normalized', type: 'charts-bar-horizontal-normalized', data: []});

    this.getGraphs();
  }

  setQuery(value: string) {
    this.query = value;
  }

  getGraphs() {
    this.graphService.list().subscribe(
      data => {
        console.log(data);
      },
      error => console.error(error),
      () => console.log('Graphs loaded')
    );
  }
}
