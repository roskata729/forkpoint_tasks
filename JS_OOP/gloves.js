class Gloves extends Armor{

    #crafting;

    constructor(name, defense, resistance, crafting){
        super(name, defense, resistance);
        this.#crafting = crafting;
    }

    checkRequirements(){
        super.checkRequirements();
        if(this.crafting < 1 || this.crafting > 10) 
            throw 'Invalid crafting'; 
    }

    getItemInfo(){
        return '${super.getItemInfo()} and adds ${this.crafting} crafting ';
    }

    get crafting(){
        return this.#crafting;
    }
    set crafting(crafting){
        this.#crafting = crafting;
    }

}