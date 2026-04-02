class Heater{
    heat(){}
}

class Chaimaker{
    private _heater: Heater;

    constructor(heater: Heater){
        this._heater = heater;
    }

    makeChai(){
        this._heater.heat();
    }
}

//This is not inheritence, this is composition
//passing one class as type to a variabl by which that bariable can have all the props from the class