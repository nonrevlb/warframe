import { damageModifier } from './damageModifiers'
import { DamageProfile } from './damageProfile';

export class Enemy {
    health: number = 1000;
    shield: number = 1000;
    baseArmor: number = 1000;
    healthType: string = "";
    shieldType: string = "";
    armorType: string = "";

    heatStatusTime: number | null = null;

    effectiveArmor(time: number): number {
        let heatMultiplier: number = 1;
        if (this.heatStatusTime) {
            let heatDuration = time - this.heatStatusTime
            if (heatDuration >= 2.0) {
                heatMultiplier = 0.5;
            }
            else if (heatDuration >= 1.5) {
                heatMultiplier = 0.6;
            }
            else if (heatDuration >= 1.0) {
                heatMultiplier = 0.7;
            }
            else if (heatDuration >= 0.5) {
                heatMultiplier = 0.85;
            }
        }
        return this.baseArmor * heatMultiplier;
    };

    damageModifierVsHealth(damageType: string, time: number) {
        let HM: number = damageModifier(this.healthType, damageType);
        let AM: number = damageModifier(this.armorType, damageType);
        let armorEffect: number;
        if (this.armorType != "") {
            armorEffect = 300/(300+this.effectiveArmor(time)*(1-AM));
        }
        else {
            armorEffect = 1;
        }
        return armorEffect * (1 + AM) * (1 + HM);
    }

    damageModifierVsShield(damageType: string) {
        return damageModifier(this.shieldType, damageType);
    }

    averageDamageModifer(damageType: string, time: number) {
        let shieldRatio: number;
        if (damageType == "toxin" || this.shieldType == "") {
            shieldRatio = 0;
        }
        else {
            shieldRatio = this.shield / (this.shield + this.health)
        }
        return this.damageModifierVsShield(damageType) * shieldRatio + this.damageModifierVsHealth(damageType, time) * (1 - shieldRatio);
    }

    effectiveDamage(baseDamage: DamageProfile, time: number): number {
        let scaledDamage = baseDamage.map( (damage: number, damageType: string) => {
            return damage * this.averageDamageModifer(damageType, time)
        });
        return scaledDamage.total();

        // let effectiveDamage: Record<string, number> = {};
        // let totalEffectiveDamage: number = 0;
        // for (const damageType in baseDamage) {
        //     let specificDamage = baseDamage[damageType]
        //     let reducedDamage = specificDamage * this.averageDamageModifer(damageType);
        //     effectiveDamage[damageType] = reducedDamage;
        //     totalEffectiveDamage += reducedDamage;
        // }
        // return totalEffectiveDamage;
        // return 0;
    }
}