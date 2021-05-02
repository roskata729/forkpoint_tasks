// Gets a random number between two values
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

static const allDamageTypes = ['psysical', 'poison', 'fire', 'water', 'air', 'earth'];
class Item {

    static countOfObjects = 0;
    #name = '';
    #id;

    constructor (name){
        this.#name = name;
        id = ++countOfObjects;
    }

    getItemInfo(){
        return 'Item ${this.id} - ${this.name}';
    }
    checkRequirements(){
        return typeof(name) == 'string';
    }

    

}
