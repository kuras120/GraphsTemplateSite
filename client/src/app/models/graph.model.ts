import {Data} from './data.model';

export interface Graph {
  graph_name: string;
  type: string;
  data: Data[];
}
