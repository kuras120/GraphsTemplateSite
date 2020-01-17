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
  data: [];

  view: any[];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  timeline = true;
  // pie
  showLabels = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  constructor() { }

  ngOnInit(): void {
    this.resize();
  }

  resize() {
    let width: number;
    let height: number;

    if (window.innerWidth < 1366) {
      width = window.innerWidth - 100;
      height = width / 2;
    } else {
      width = (window.innerWidth / 2) - 100;
      height = width / 2;
    }
    this.view = [width, height];
  }

  onResize(event) {
    this.resize();
  }

  onSelect(event: {}) {
    console.log('clicked');
  }
}
