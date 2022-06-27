import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'damage-graph',
  templateUrl: './damage-graph.component.html',
  styleUrls: ['./damage-graph.component.css'],
})
export class DamageGraphComponent implements OnInit {
  @Input() xData!: number[];
  @Input() damageData!: number[];

  options: any;
  get updateOptions(): any {
    return {
      series: [
        {
          name: 'Total',
          data: this.damageData,
        },
      ]
    };
  }
  constructor() { }

  ngOnInit(): void {
    this.options = {
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
          name: 'Total',
          type: 'line',
          data: this.damageData,
          animationDelay: (idx: number) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }
}