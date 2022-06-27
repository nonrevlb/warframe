import { outputAst } from "@angular/compiler"


export class DamageProfile {
    // Physical Damage
    impact: number = 100
    puncture: number = 100
    slash: number = 100

    // Elemental Damage
    cold: number = 0
    electricity: number = 0
    heat: number = 0
    toxin: number = 0

    // Hybrid Damage
    blast: number = 0
    corrosive: number = 0
    gas: number = 0
    magnetic: number = 0
    radiation: number = 0
    viral: number = 0

    map( func: Function ): DamageProfile {
        let output = new DamageProfile;
        output.impact = func(this.impact, "impact")
        output.puncture = func(this.puncture, "puncture")
        output.slash = func(this.slash, "slash")
        
        output.cold = func(this.cold, "cold")
        output.electricity = func(this.electricity, "electricity")
        output.heat = func(this.heat, "heat")
        output.toxin = func(this.toxin, "toxin")
        
        output.blast = func(this.blast, "blast")
        output.corrosive = func(this.corrosive, "corrosive")
        output.magnetic = func(this.magnetic, "magnetic")
        output.radiation = func(this.radiation, "radiation")
        output.gas = func(this.gas, "gas")
        output.viral = func(this.viral, "viral")

        return output;
    }

    total(): number {
        let output: number = 0;

        output += this.impact;
        output += this.puncture;
        output += this.slash;
        
        output += this.cold;
        output += this.electricity;
        output += this.heat;
        output += this.toxin;
        
        output += this.blast;
        output += this.corrosive;
        output += this.magnetic;
        output += this.radiation;
        output += this.gas;
        output += this.viral;

        return output;
    }

    get(damageType: string): number {
        if (damageType == "impact") return this.impact;
        if (damageType == "puncture") return this.puncture;
        if (damageType == "slash") return this.slash;

        if (damageType == "cold") return this.cold;
        if (damageType == "electricity") return this.electricity;
        if (damageType == "heat") return this.heat;
        if (damageType == "toxin") return this.toxin;
        
        if (damageType == "blast") return this.blast;
        if (damageType == "corrosive") return this.corrosive;
        if (damageType == "magnetic") return this.magnetic;
        if (damageType == "radiation") return this.radiation;
        if (damageType == "gas") return this.gas;
        if (damageType == "viral") return this.viral;

        return 0;
    }
}