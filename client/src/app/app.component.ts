import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Graph} from './models/graph.model';
import {GraphService} from './services/graph.service';
import {last} from 'rxjs/operators';

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
    this.getGraphs();
  }

  setQuery(value: string) {
    this.query = value;
  }

  getGraphs() {
    this.graphService.list().subscribe(
      response => {
        response.sort((a, b) => (a.name > b.name) ? 1 : -1);
        let lastGraph: Graph = null;
        response.forEach(graph => {
          const formattedData = [];
          graph.data.forEach(data => {
            data.graph = {name: graph.name, sub_name: graph.sub_name, description: graph.description,
              type: graph.type, x_label: graph.x_label, y_label: graph.y_label, data: [], creation_date: graph.creation_date,
              output_data: []};
            formattedData.push({name: data.key, value: data.value});
          });
          if (lastGraph != null && lastGraph.name === graph.name &&
              lastGraph.x_label === graph.x_label && lastGraph.y_label === graph.y_label) {
            lastGraph.data = lastGraph.data.concat(graph.data);
            lastGraph.output_data.push({name: graph.sub_name, series: formattedData});
          } else {
            this.graphs.push({name: graph.name, sub_name: graph.sub_name, description: graph.description,
              type: graph.type, x_label: graph.x_label, y_label: graph.y_label, data: graph.data, creation_date: graph.creation_date,
              output_data: [{name: graph.sub_name, series: formattedData}]});
          }
          lastGraph = this.graphs[this.graphs.length - 1];
        });
        console.log(this.graphs);
      },
      error => console.error(error),
      () => console.log('Graphs loaded')
    );
  }
}
