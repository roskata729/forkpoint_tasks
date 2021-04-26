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

    

}
