class Staff extends Weapon{


    #burn = damageType === 'fire' ? true : false;
    #poison = damageType === 'poison' ? true : false;
    #cold = damageType === 'water' ? true : false;
    #electrify = damageType === 'air' ? true : false;
    #tremor = damageType === 'earth' ? true : false;


    constructor(name,attack, damageType){
        super(name,attack, damageType, true);
    }
    getItemInfo(){
        var returnActionArray = [burn, poison, cold, electrify, tremor];
        var returnAction = returnActionArray.includes(true);
        return '${super.getItemInfo()} has ${this.attack} of ${this.damagetype}'
        + ' and has 50% chance to apply ${returnAction}';
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