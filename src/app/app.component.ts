import { Component } from '@angular/core';
import { first } from 'rxjs';
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

  effectiveHitDamage(time: number): number {
    return this.enemy.effectiveDamage(this.weapon.damageWithCrits, time);
  }

  effectiveDPS(time: number): number {
    return this.weapon.dps(this.effectiveHitDamage(time));
  }

  slashDPS(time: number) {
    let firstStack: number | null = this.weapon.firstStackTime('heat');
    if (!firstStack) {
      return 0;
    }
    let stackTime: number = time <= 7 + firstStack  ? time - firstStack - 1 : 6;

    if (stackTime < 0) {
      return 0;
    }

    let stacks: number = this.weapon.averageStatusStacks(stackTime, "slash");
    let tick: number = 0.35 * this.weapon.damageWithCrits["slash"];

    return tick * stacks
  }

  statusUpdate() {
    this.enemy.heatStatusTime = this.weapon.firstStackTime('heat');
  }

  heatDPS(time: number) {
    let firstStack: number | null = this.weapon.firstStackTime('heat');
    if (!firstStack) {
      return 0;
    }
    let stackTime: number = time - firstStack - 1;
    if (stackTime < 0) {
      return 0;
    }

    let stacks: number = this.weapon.averageStatusStacks(stackTime, "heat");
    let tick: number = 0.5 * this.weapon.damageWithCrits.heat;

    let effectiveTick: number = tick * this.enemy.averageDamageModifer("heat", time);

    return effectiveTick * stacks
  }

  fullDPS(time: number) {
    return this.effectiveDPS(time) + this.slashDPS(time) + this.heatDPS(time);
  }

  get graphXData() {
    return [...Array(40).keys()].map( x => x/4 );
  }

  get damageData() {
    let x = this.graphXData;
    return x.map(x => this.fullDPS(x));
  }

  get hitData() {
    let x = this.graphXData;
    return x.map(x => this.effectiveDPS(x));
  }

  get slashData() {
    let x = this.graphXData;
    return x.map(x => this.slashDPS(x));
  }

  get heatData() {
    let x = this.graphXData;
    return x.map(x => this.heatDPS(x));
  }
}
