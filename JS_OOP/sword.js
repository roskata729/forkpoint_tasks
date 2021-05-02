class Sword extends Weapon{

    #cripple = twoHanded ? 40 : 25; // Based on the Twohand property from Weapon
    #bleed = twoHanded ? 40 : 25;  // Based on the Twohand property from Weapon

    constructor(name,attack, damageType, twoHanded){
        super(name,attack, damageType, twoHanded);
    }

    getItemInfo(){
        return '${super.getItemInfo()} and has ${cripple}% to cripple and ${bleed}% to bleed';
    }

    set cripple(cripple){
        this.cripple = cripple;
    }
    get cripple(){
        return this.cripple;
    }
    set bleed(bleed){
        this.bleed = bleed;
    }
    get bleed(){
        return this.bleed;
    }


}