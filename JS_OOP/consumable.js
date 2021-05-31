//imports
const Item = require('./item').Item;
const getRandomNumber = require('./item').getRandomNumber;
const allDamageTypes = require('./item').allDamageTypes;

const typeOfConsumable = ['minor', 'medium', 'big'];

class Consumable extends Item{

    #heals;
    #type;
    #effect;

    constructor (name, heals, type){
        super(name);
        this.#heals = heals;
        this.#type = type;
        this.setEffectLogic();
    }

    checkRequirements(){
        super.checkRequirements();
        if(typeof(heals) !== 'boolean') throw 'Invalid type of heals';
        if(!typeOfConsumable.includes(this.type)) throw 'Invalid type of consumable';
    }

    getItemInfo(){
        return `${super.getItemInfo()} - it is a ${this.type} potion and ${this.heals ? 'heals' : 'damages'} for ${this.effect}`;
    }

    setEffectLogic () {
        if(this.type == 'minor') 
            this.#effect = getRandomNumber(1,10);
        else if(this.type == 'medium') 
            this.#effect = getRandomNumber(11,20);
        else if(this.type == 'big') 
            this.#effect = getRandomNumber(21,30);
    }

    get effect(){
        return this.#effect;
    }
    set effect(effect){
        this.#effect = effect;
    }

    set heals(heals){
        this.#heals = heals;
    }
    get heals(){
        return this.#heals;
    }
    set type(type){
        this.#type = type;
    }
    get type(){
        return this.#type;
    }

}
module.exports = {Consumable, typeOfConsumable};
let myFirstItem = new Consumable('myFirstConsumable', false, 'big');
console.log(myFirstItem.getItemInfo());