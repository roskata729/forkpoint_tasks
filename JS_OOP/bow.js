const arrowTypes = ['normal', 'special']; // all Arrow types
class Bow extends Weapon{

    #arrowType; // normal or special
    #pierce = arrowType ==='normal' ? true : false;
    #critical = arrowType === 'special' ? true : false;

    constructor(name,attack, damageType, arrowType){
        super(name,attack, damageType, true);
        this.#arrowType = arrowType;
    }

    checkRequirements(){
        super.checkRequirements();
        if(!twoHanded) throw 'The twohanded property is false';
        if(!arrowTypes.includes(arrowType)) throw 'Invalid arrow type';
    }

    getItemInfo(){
        return '${super.getItemInfo()} and has ${[pierce() ? 50 : 0]} chance to apply pierce and ${[critical() ? 50 : 0]} chance to apply critical';
    }

    get arrowType(){
        return this.#arrowType;
    }
    set arrowType(arrowType){
        this.#arrowType = arrowType;
    }
    get pierce(){
        return this.#pierce;
    }
    set pierce(pierce){
        this.#pierce = pierce;
    }
    get critical(){
        return this.#critical;
    }
    set critical(critical){
        this.#critical = critical;
    }

}