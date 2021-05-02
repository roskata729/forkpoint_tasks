class Boots extends Armor{

    #speed;

    constructor(name, defense, resistance, speed){
        super(name, defense, resistance);
        this.#speed = speed;
    }

    checkRequirements(){
        super.checkRequirements();
        if(this.speed < 1 || this.speed > 10) 
            throw 'Invalid speed'; 
    }

    getItemInfo(){
        return '${super.getItemInfo()} and adds ${this.speed} speed ';
    }

    get speed(){
        return this.#speed;
    }
    set speed(speed){
        this.#speed = speed;
    }
}