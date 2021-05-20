const Weapon = require('./weapon').Weapon;
const allDamageTypes = require('./item').allDamageTypes;
class Staff extends Weapon{


    #burn = super.damageType === 'fire' ? true : false;
    #poison = super.damageType === 'poison' ? true : false;
    #cold = super.damageType === 'water' ? true : false;
    #electrify = super.damageType === 'air' ? true : false;
    #tremor = super.damageType === 'earth' ? true : false;


    constructor(name,attack, damageType){
        super(name,attack, damageType, true);
    }
    getItemInfo(){
        return `${super.getItemInfo()} and has 50% chance to apply ${super.damageType}`;
    }
    checkRequirements(){
        super.checkRequirements();
        if(!twoHanded) throw 'The twohanded property is false';
        if(this.damageType == 'physical') throw 'Invalid damage type';
    }

    get burn(){
        return this.#burn;
    }
    set burn(burn){
        this.#burn = burn;
    }
    get poison(){
        return this.#poison;
    }
    set poison(poison){
        this.#poison = poison;
    }
    get cold(){
        return this.#cold;
    }
    set cold(cold){
        this.#cold = cold;
    }
    get electrify(){
        return this.#electrify;
    }
    set electrify(electrify){
        this.#electrify = electrify;
    }
    get tremor(){
        return this.#tremor;
    }
    set tremor(tremor){
        this.#tremor = tremor;
    }
}
let myFirstitem = new Staff('myFirstStaff', 15750, 'earth');
console.log(myFirstitem.getItemInfo());