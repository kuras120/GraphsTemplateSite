import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  subName: string;
  @Input()
  type: string;
  @Input()
  xLabel: string;
  @Input()
  yLabel: string;
  @Input()
  data: any[];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  constructor() { }

  ngOnInit() { }

  onSelect(_event: any) {
    console.log('clicked');
  }
}
