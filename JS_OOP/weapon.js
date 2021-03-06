//imports
const Item = require('./item').Item;
//const getRandomNumber = require('./item').getRandomNumber;
const allDamageTypes = require('./item').allDamageTypes;

class Weapon extends Item {
     
    #attack;
    #twoHanded;
    #damageType;
    
    constructor (name,attack, damageType, twoHanded) {
        super(name);
        this.#attack = attack;
        this.#damageType = damageType;
        this.#twoHanded = twoHanded;
    }

    checkRequirements(){
        super.checkRequirements();
        if(attack < 1 && this.attack > 30000) throw 'The attack does NOT meet the requirements';
        if(!allDamageTypes.includes(damageType)) throw 'The damage type is incorrect';
        if(typeof twoHanded != 'boolean') throw 'Two-Handed is incorrect';
    }

    getItemInfo(){
        return `${super.getItemInfo()} has ${this.attack} of ${this.damageType}`;
    }

    set attack(attack){
        this.#attack = attack;
    }
    get attack(){
        return this.#attack;
    }

    set twoHanded(twoHanded){
        this.#twoHanded = twoHanded;
    }
    get twoHanded(){
        return this.#twoHanded;
    }

    set damageType(damageType){
        this.#damageType = damageType;
    }
    get damageType(){
        return this.#damageType;
    }
}
module.exports = {Weapon};

let myFirstWeapon = new Weapon('myFirstWeapon', 18000, 'fire', false);
console.log(myFirstWeapon.getItemInfo());