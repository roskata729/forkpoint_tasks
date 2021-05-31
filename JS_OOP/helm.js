const Armor = require('./armor').Armor;
class Helm extends Armor{

    #attractiveness;

    constructor(name, defense, resistance, attractiveness){
        super(name, defense, resistance);
        this.#attractiveness = attractiveness;
    }

    checkRequirements(){
        super.checkRequirements();
        if(this.attractiveness > -5 || this.attractiveness < 5) 
            throw 'Invalid attractiveness'; 
    }

    getItemInfo(){
        return `${super.getItemInfo()} and adds ${this.attractiveness} attractiveness `;
    }

    get attractiveness(){
        return this.#attractiveness;
    }
    set attractiveness(attractiveness){
        this.#attractiveness = attractiveness;
    }
}
let myFirstItem = new Helm('myFirstGloves', 25000, 'fire', 4);
console.log(myFirstItem.getItemInfo());
