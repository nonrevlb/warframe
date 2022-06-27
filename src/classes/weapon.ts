import { DamageProfile } from "./damageProfile";

export class Weapon {
    // Weapon Stats
    fireRate: number = 1;
    multishot: number = 1;
    magazineSize: number = 10;
    reloadTime: number = 1;
    displayCriticalChance: number = 10;
    criticalDamage: number = 2;
    displayStatusChance: number = 10;

    damage: DamageProfile = new DamageProfile();

    get criticalChance(): number {
        return this.displayCriticalChance / 100;
    }

    get statusChance(): number {
        return this.displayStatusChance / 100;
    }

    get hitsPerSecond(): number {
        let firePeriod = this.magazineSize / this.fireRate;
        let damageUptime = firePeriod / (firePeriod + this.reloadTime);
        return this.fireRate * this.multishot * damageUptime;
    }

    get baseDamage(): number {
        return this.damage.total()
    }

    averageCriticalDamage( baseDamage: number ): number {
        return this.criticalChance * baseDamage * this.criticalDamage + (1 - this.criticalChance) *baseDamage;
    }

    averageStatusStacks( time: number, damageType: string ): number {
        let chanceOfSpecificStatus: number = 0;
        if (damageType = "all") {
            chanceOfSpecificStatus = 1;
        }
        else {
            let specificDamage: any = this.damage.get(damageType);
            chanceOfSpecificStatus = specificDamage / this.baseDamage;
        }
        return this.hitsPerSecond * this.statusChance * chanceOfSpecificStatus * time;
    }

    // Calculated Values
    get hitDPS(): number {
        return this.averageCriticalDamage(this.baseDamage) * this.hitsPerSecond;
    }

    dps( averageHit: number ): number {
        return averageHit * this.hitsPerSecond;
    }

    get damageWithCrits(): DamageProfile {
        return this.damage.map( (damage: number, damageType: string) => this.averageCriticalDamage(damage))
    }

    get averageHitDamage(): number {
        return this.averageCriticalDamage(this.baseDamage)
      }
}
