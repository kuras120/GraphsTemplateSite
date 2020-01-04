import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input()
  graphName: string;
  @Input()
  type: string;
  result: any[];
  view: any[];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  // pie
  showLabels = true;

  // data goes here
  public single = [
    {name: 'China', value: 2243772},
    {name: 'USA', value: 1126000},
    {name: 'Norway', value: 296215},
    {name: 'Japan', value: 257363},
    {name: 'Germany', value: 196750},
    {name: 'France', value: 204617}
  ];

  public multi = [
    {name: 'China', series: [{name: '2018', value: 2243772}, {name: '2017', value: 1227770}]},
    {name: 'USA', series: [{name: '2018', value: 1126000}, {name: '2017', value: 764666}]},
    {name: 'Norway', series: [{name: '2018', value: 296215}, {name: '2017', value: 209122}]},
    {name: 'Japan', series: [{name: '2018', value: 257363}, {name: '2017', value: 205350}]},
    {name: 'Germany', series: [{name: '2018', value: 196750}, {name: '2017', value: 129246}]},
    {name: 'France', series: [{name: '2018', value: 204617}, {name: '2017', value: 149797}]}
  ];

  constructor() { }

  ngOnInit(): void {
    this.resize();
    if (this.type.includes('normalized')) {
      this.result = this.multi;
    } else {
      this.result = this.single;
    }
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
    console.log(window.innerWidth);
  }

  onResize(event) {
    this.resize();
  }

  onSelect(event: {}) {
    console.log('clicked');
  }
}
