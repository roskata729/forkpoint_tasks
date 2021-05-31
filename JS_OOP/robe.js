const Armor = require('./armor').Armor;
class Robe extends Armor{
    #reputation;

    constructor(name, defense, resistance, reputation){
        super(name, defense, resistance);
        this.#reputation = reputation;
    }

    checkRequirements(){
        super.checkRequirements();
        if(this.reputation < 1 || this.reputation > 10) 
            throw 'Invalid reputation'; 
    }

    getItemInfo(){
        return `${super.getItemInfo()} and adds ${this.reputation} reputation `;
    }

    get reputation(){
        return this.#reputation;
    }
    set reputation(reputation){
        this.#reputation = reputation;
    }
}
let myFirstitem = new Robe('myFirstRobe', 32000, 'fire', 7);
console.log(myFirstitem.getItemInfo());