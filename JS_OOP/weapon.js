const allDamageTypes = ['psysical','poison','fire', 'water', 'air', 'earth'];
class Weapon extends Item {
     
    #attack; 
    #twoHanded;
    #damageType;
    
    constructor (name,attack, damageType, twoHanded) {
        super(name);
        this.attack = attack;
        this.damageType = damageType;
        this.twoHanded = twoHanded;
        this.checkRequirements();
    }

    checkRequirements(){

        if(this.attack < 1 && this.attack > 30000) throw 'The attack does NOT meet the requirements';
        if(!allDamageTypes.includes(this.damageType)) throw 'The damage type is incorrect';
        if(typeof this.twoHanded != 'boolean') throw 'Two-Handed is incorrect';
    }

    getItemInfo(){
        return '${super.getItemInfo()} has ${this.attack} of ${this.damagetype}'
    }

    set attack(attack){
        this.attack = attack;
    }
    get attack(){
        return this.attack;
    }

    set twoHanded(twoHanded){
        this.twoHanded = twoHanded;
    }
    get twoHanded(){
        return this.twoHanded;
    }

    set damageType(damageType){
        this.damageType = damageType;
    }
    get damageType(){
        return this.damageType;
    }


}