class Chai{
    public flavour: string = 'masala';
    private secretIngredient: string =  "cardamom"

    reveal(){
        return this.secretIngredient
    }
}

const masalaChai = new Chai();
masalaChai.reveal()
// masalaChai.secretIngredient //error




class Shop{
    protected shopName: string = "Chai Shop"
}
class Branch extends Shop{
    getName(){
        return this.shopName;
    }
}

new Branch().getName() //OK



class Wallet{
    #balance = 0.78; //private often denoted by # 
    getBalance(){
        return this.#balance
    }
}

const w = new Wallet();
w.getBalance()




//readonly

class Cup{
    readonly capacity = 250;
    constructor(capacity: number){
        // this.capacity = capacity; //shows error as readonly
        //only can be assigned once amd caan never be modified
    }
}