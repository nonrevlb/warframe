import { Component } from '@angular/core';
import { Enemy } from 'src/classes/enemy';
import { Weapon } from '../classes/weapon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
})
export class AppComponent {
  title = 'warframe';
  weapon = new Weapon();
  enemy = new Enemy();

  get statusStacksPerSecond(): number {
    return this.weapon.averageStatusStacks(1, "all");
  }

  get effectiveHitDamage(): number {
    return this.enemy.effectiveDamage(this.weapon.damageWithCrits);
  }

  get effectiveDPS(): number {
    return this.weapon.dps(this.effectiveHitDamage);
  }

  slashDPS(time: number) {
    if (time < 1) {
      return 0;
    }

    let stackTime: number = time <= 7 ? time - 1 : 6;
    let slashStacks: number = this.weapon.averageStatusStacks(stackTime, "slash");
    let slashTick: number = 0.35 * this.weapon.damage["slash"];

    return slashTick * slashStacks
  }

  get graphXData() {
    return [...Array(10).keys()];
  }

  get slashData() {
    let x = this.graphXData;
    return x.map(x => this.slashDPS(x));
  }

  get statusGraph(): any {
    return {
      legend: {
        data: ['Slash'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.graphXData,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Slash',
          type: 'line',
          data: this.slashData,
        },
      ],
    };
  }


}
