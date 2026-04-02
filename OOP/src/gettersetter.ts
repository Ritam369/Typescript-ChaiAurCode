class Chai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if(value >= 0 && value <= 5){
            this._sugar = value
        }else{
            throw new Error("Too sweet! Very Bad")
        }
    }
}

const c = new Chai()
console.log(c.sugar) //getter
c.sugar = 3 //setter