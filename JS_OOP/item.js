// Gets a random number between two values
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const allDamageTypes = ['psysical', 'poison', 'fire', 'water', 'air', 'earth'];
class Item {

    static countOfObjects = 0;
    #name = '';
    #id;

    constructor (name){
        this.#name = name;
        this.#id = ++Item.countOfObjects;
    }

    getItemInfo(){
        return `Item ${this.#id} - ${this.name}`;
    }
    checkRequirements(){
        return typeof(this.#name) == 'string';
    }

    set name(name){
        this.name = name;
    }
    get name(){
        return this.#name;
    }

}
module.exports = {Item, getRandomNumber, allDamageTypes};

let myFirstItem = new Item("firstItem");
console.log(myFirstItem.getItemInfo());