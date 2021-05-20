const Weapon = require('./weapon').Weapon;

class Sword extends Weapon{

    #cripple = super.twoHanded ? 40 : 25; // Based on the Twohand property from Weapon
    #bleed = super.twoHanded ? 40 : 25;  // Based on the Twohand property from Weapon

    constructor(name,attack, damageType, twoHanded){
        super(name,attack, damageType, twoHanded);
    }

    getItemInfo(){
        return `${super.getItemInfo()} and has ${this.cripple}% to cripple and ${this.bleed}% to bleed`;
    }

    set cripple(cripple){
        this.#cripple = cripple;
    }
    get cripple(){
        return this.#cripple;
    }
    set bleed(bleed){
        this.#bleed = bleed;
    }
    get bleed(){
        return this.#bleed;
    }
}
let myFirstItem = new Sword('myFirstSword', 12506, 'fire', true);
console.log(myFirstItem.getItemInfo());