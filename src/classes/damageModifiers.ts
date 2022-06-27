// Health Modifiers
let machineryHealthModifier: Record<string, number> = {
    // Physical Damage
    impact: .25,
    puncture: 0,
    slash: 0,

    // Elemental Damage
    cold: 0,
    electricity: .5,
    heat: 0,
    toxin: -.25,

    // Hybrid Damage
    blast: .75,
    corrosive: 0,
    gas: 0,
    magnetic: 0,
    radiation: 0,
    viral: -.25,
}
let clonedFleshHealthModifier: Record<string, number> = {
    // Physical Damage
    impact: -.25,
    puncture: 0,
    slash: .25,

    // Elemental Damage
    cold: 0,
    electricity: 0,
    heat: .25,
    toxin: 0,

    // Hybrid Damage
    blast: 0,
    corrosive: 0,
    gas: -.5,
    magnetic: 0,
    radiation: 0,
    viral: .75,
}
let fossilizedHealthModifier: Record<string, number> = {
    // Physical Damage
    impact: 0,
    puncture: 0,
    slash: .15,

    // Elemental Damage
    cold: 0,
    electricity: 0,
    heat: 0,
    toxin: -.5,

    // Hybrid Damage
    blast: .5,
    corrosive: .75,
    gas: 0,
    magnetic: 0,
    radiation: -.75,
    viral: 0,
}
let infestedFleshHealthModifier: Record<string, number> = {
    // Physical Damage
    impact: 0,
    puncture: 0,
    slash: .5,

    // Elemental Damage
    cold: -.5,
    electricity: 0,
    heat: .5,
    toxin: 0,

    // Hybrid Damage
    blast: 0,
    corrosive: 0,
    gas: .5,
    magnetic: 0,
    radiation: 0,
    viral: 0,
}
let infestedHealthModifier: Record<string, number> = {
    // Physical Damage
    impact: 0,
    puncture: 0,
    slash: .25,

    // Elemental Damage
    cold: 0,
    electricity: 0,
    heat: .25,
    toxin: 0,

    // Hybrid Damage
    blast: 0,
    corrosive: 0,
    gas: .75,
    magnetic: 0,
    radiation: -.5,
    viral: -.5,
}
let roboticHealthModifier: Record<string, number> = {
    // Physical Damage
    impact: 0,
    puncture: .25,
    slash: -.25,

    // Elemental Damage
    cold: 0,
    electricity: .5,
    heat: 0,
    toxin: -.25,

    // Hybrid Damage
    blast: 0,
    corrosive: 0,
    gas: 0,
    magnetic: 0,
    radiation: .25,
    viral: 0,
}
let fleshHealthModifiers: Record<string, number> = {
    // Physical Damage
    impact: -.25,
    puncture: 0,
    slash: .25,

    // Elemental Damage
    cold: 0,
    electricity: 0,
    heat: 0,
    toxin: .5,

    // Hybrid Damage
    blast: 0,
    corrosive: 0,
    gas: -.25,
    magnetic: 0,
    radiation: 0,
    viral: .5,
}






// Shield Modifiers
let protoshieldModifier: Record<string, number> = {
    // Physical Damage
    impact: .15,
    puncture: -.5,
    slash: 0,

    // Elemental Damage
    cold: 0,
    electricity: 0,
    heat: -.5,
    toxin: .25,

    // Hybrid Damage
    blast: 0,
    corrosive: -.5,
    gas: 0,
    magnetic: .75,
    radiation: 0,
    viral: 0,
}
let shieldModifier: Record<string, number> = {
    // Physical Damage
    impact: .5,
    puncture: -.2,
    slash: 0,

    // Elemental Damage
    cold: .5,
    electricity: 0,
    heat: 0,
    toxin: 0,

    // Hybrid Damage
    blast: 0,
    corrosive: 0,
    gas: 0,
    magnetic: .75,
    radiation: -.25,
    viral: 0,
}






// Armor Modifiers
let infestedSinewArmorModifier: Record<string, number> = {
    // Physical Damage
    impact: 0,
    puncture: .25,
    slash: 0,

    // Elemental Damage
    cold: .25,
    electricity: 0,
    heat: 0,
    toxin: 0,

    // Hybrid Damage
    blast: -.5,
    corrosive: 0,
    gas: 0,
    magnetic: 0,
    radiation: .5,
    viral: 0,
}
let alloyArmorModifier: Record<string, number> = {
    // Physical Damage
    impact: 0,
    puncture: .15,
    slash: -.5,

    // Elemental Damage
    cold: .25,
    electricity: -.5,
    heat: 0,
    toxin: 0,

    // Hybrid Damage
    blast: 0,
    corrosive: 0,
    gas: 0,
    magnetic: -.5,
    radiation: .75,
    viral: 0,
}
let ferriteArmorModifier: Record<string, number> = {
    // Physical Damage
    impact: 0,
    puncture: .5,
    slash: -.15,

    // Elemental Damage
    cold: 0,
    electricity: 0,
    heat: 0,
    toxin: 0,

    // Hybrid Damage
    blast: -.25,
    corrosive: .75,
    gas: 0,
    magnetic: 0,
    radiation: 0,
    viral: 0,
}




let template: Record<string, number> = {
    // Physical Damage
    impact: 0,
    puncture: 0,
    slash: 0,

    // Elemental Damage
    cold: 0,
    electricity: 0,
    heat: 0,
    toxin: 0,

    // Hybrid Damage
    blast: 0,
    corrosive: 0,
    gas: 0,
    magnetic: 0,
    radiation: 0,
    viral: 0,
}

export function damageModifier(defenceType: string, damageType: string): number {
    if (defenceType == "machinery") {
        return machineryHealthModifier[damageType];
    }
    if (defenceType == "cloned flesh") {
        return clonedFleshHealthModifier[damageType];
    }
    if (defenceType == "fossilized") {
        return fossilizedHealthModifier[damageType];
    }
    if (defenceType == "infested flesh") {
        return infestedFleshHealthModifier[damageType];
    }
    if (defenceType == "infested") {
        return infestedHealthModifier[damageType];
    }
    if (defenceType == "robotic") {
        return roboticHealthModifier[damageType];
    }
    if (defenceType == "proto shield") {
        return protoshieldModifier[damageType];
    }
    if (defenceType == "shield") {
        return shieldModifier[damageType];
    }
    if (defenceType == "infested sinew") {
        return infestedSinewArmorModifier[damageType];
    }
    if (defenceType == "alloy") {
        return alloyArmorModifier[damageType];
    }
    if (defenceType == "ferrite") {
        return ferriteArmorModifier[damageType];
    }
    else {
        return 0;
    }
}