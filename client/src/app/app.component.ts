import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Graph} from './models/graph.model';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Graphs Template Site';
  graphs: Graph[] = [];
  query: string;

  constructor() { }

  setQuery(value: string) {
    this.query = value;
  }

  ngOnInit(): void {
    this.graphs.push({graph_name: 'Vertical Bar Chart', type: 'charts-bar-vertical', data: []});
    this.graphs.push({graph_name: 'Vertical Bar Chart Normalized', type: 'charts-bar-vertical-normalized', data: []});
    this.graphs.push({graph_name: 'Horizontal Bar Chart', type: 'charts-bar-horizontal', data: []});
    this.graphs.push({graph_name: 'Horizontal Bar Chart Normalized', type: 'charts-bar-horizontal-normalized', data: []});
  }
}
