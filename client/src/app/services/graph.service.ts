import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Graph} from '../models/graph.model';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Graph[]>(`${environment.api}/graphs/`)
    .pipe(map(response => {
      const graphs: Graph[] = [];
      response.sort((a, b) => (a.name > b.name) ? 1 : -1);
      let lastGraph: Graph = null;
      response.forEach(graph => {
        graph.x_label = graph.x_label.toLowerCase();
        graph.y_label = graph.y_label.toLowerCase();
        const formattedData = [];
        graph.data.forEach(data => {
          const tempGraph = Object.assign({}, graph);
          tempGraph.data = [];
          tempGraph.output_data = [];
          data.graph = tempGraph;
          formattedData.push({name: data.key, value: data.value});
        });
        if (lastGraph != null &&
            lastGraph.name === graph.name &&
            lastGraph.x_label === graph.x_label &&
            lastGraph.y_label === graph.y_label) {
          lastGraph.data = lastGraph.data.concat(graph.data);
          lastGraph.output_data.push({name: graph.sub_name, series: formattedData});
        }
        else {
          graphs.push({name: graph.name, sub_name: graph.sub_name, description: graph.description,
            type: graph.type, x_label: graph.x_label, y_label: graph.y_label, data: graph.data, creation_date: graph.creation_date,
            output_data: [{name: graph.sub_name, series: formattedData}]});
        }
        lastGraph = graphs[graphs.length - 1];
      });
      return graphs;
    }));
  }
}
