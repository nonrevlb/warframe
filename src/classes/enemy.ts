import { damageModifier } from './damageModifiers'
import { DamageProfile } from './damageProfile';

export class Enemy {
    health: number = 1000;
    shield: number = 1000;
    baseArmor: number = 1000;
    get effectiveArmor(): number {
        return this.baseArmor;
    };
    healthType: string = "";
    shieldType: string = "";
    armorType: string = "";

    damageModifierVsHealth(damageType: string) {
        let HM: number = damageModifier(this.healthType, damageType);
        let AM: number = damageModifier(this.armorType, damageType);
        let armorEffect: number;
        if (this.armorType != "") {
            armorEffect = 300/(300+this.effectiveArmor*(1-AM));
        }
        else {
            armorEffect = 1;
        }
        return armorEffect * (1 + AM) * (1 + HM);
    }

    damageModifierVsShield(damageType: string) {
        return damageModifier(this.shieldType, damageType);
    }

    averageDamageModifer(damageType: string) {
        let shieldRatio: number;
        if (damageType == "toxin" || this.shieldType == "") {
            shieldRatio = 0;
        }
        else {
            shieldRatio = this.shield / (this.shield + this.health)
        }
        return this.damageModifierVsShield(damageType) * shieldRatio + this.damageModifierVsHealth(damageType) * (1 - shieldRatio);
    }

    effectiveDamage(baseDamage: DamageProfile): number {
        let scaledDamage = baseDamage.map( (damage: number, damageType: string) => {
            return damage * this.averageDamageModifer(damageType)
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