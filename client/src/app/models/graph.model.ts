import {Data} from './data.model';

export interface Graph {
  name: string;
  sub_name: string;
  description: string;
  type: string;
  x_label: string;
  y_label: string;
  creation_date: Date;
  data: Data[];
  output_data: {}[];
}
