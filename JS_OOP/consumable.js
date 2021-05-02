const typeOfConsumable = ['minor', 'medium', 'big'];
class Consumable extends Item{

    #heals;
    #type;
    #effect;

    constructor (name, heals, type){
        super(name);
        this.#heals = heals;
        this.#type = type;
        this.effect();
    }

    checkRequirements(){
        super.checkRequirements();
        if(typeof(heals) !== 'boolean') throw 'Invalid type of heals';
        if(!typeOfConsumable.includes(this.type)) throw 'Invalid type of consumable';
    }

    get effect(){
        return this.#effect;
    }
    set effect(){

        if(this.type == 'minor') 
            this.#effect = getRandomNumber(1,10);
        else if(this.type == 'medium') 
            this.#effect = getRandomNumber(11,20);
        else if(this.type == 'big') 
            this.#effect = getRandomNumber(21,30);
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