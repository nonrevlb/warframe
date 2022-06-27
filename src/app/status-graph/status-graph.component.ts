import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'status-graph',
  templateUrl: './status-graph.component.html',
  styleUrls: ['./status-graph.component.css'],
})
export class StatusGraphComponent implements OnInit {
  @Input() xData!: number[];
  @Input() hitData!: number[];
  @Input() slashData!: number[];
  @Input() heatData!: number[];

  options: any;
  get updateOptions(): any {
    return {
      series: [
        {
          name: 'Hit',
          data: this.hitData,
        },
        {
          name: 'Slash',
          data: this.slashData,
        },
        {
          name: 'Heat',
          data: this.heatData,
        }
      ]
    };
  }
  constructor() { }

  ngOnInit(): void {
    this.options = {
      legend: {
        data: ['Hit','Slash','Heat'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.xData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Hit',
          type: 'line',
          data: this.hitData,
          animationDelay: (idx: number) => idx * 10,
        },
        {
          name: 'Slash',
          type: 'line',
          data: this.slashData,
          animationDelay: (idx: number) => idx * 10,
        },
        {
          name: 'Heat',
          type: 'line',
          data: this.heatData,
          animationDelay: (idx: number) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }
}