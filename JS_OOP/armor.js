const Item = require('./item').Item;
const getRandomNumber = require('./item').getRandomNumber;
const allDamageTypes = require('./item').allDamageTypes;

class Armor extends Item {

    #defense;
    #resistance;
    #chance = getRandomNumber(10,100);

    constructor(name, defense, resistance){
        super(name);
        this.#defense = defense;
        this.#resistance = resistance;
    }

    checkRequirements(){
        super.checkRequirements();
        if(this.defense < 1 || this.defense > 50000) throw 'Invalid defense value';
        if(!allDamageTypes.includes(this.resistance)) throw 'Invalid resistance';
    }

    getItemInfo(){
        return `${super.getItemInfo()} has ${this.defense} defense and ${this.#chance}% resistance`;
    }

    get defense(){
        return this.#defense;
    }
    set defense(defense) {
        this.#defense = defense;
    }
    get resistance(){
        return this.#resistance;
    }
    set resistance(resistance) {
        this.#resistance = resistance;
    }
}
module.exports = {Armor};

let myFirstItem = new Armor ("myFirstitem", 20000, "fire");
console.log(myFirstItem.getItemInfo());