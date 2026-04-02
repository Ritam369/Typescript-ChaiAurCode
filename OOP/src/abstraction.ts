abstract class Chai{
    abstract make(): void;
}
//Note can't make object from abstract class
//const chai = new Chai() // Error!

//abstract methods should be overrided

class MasalaChai extends Chai{
    make(){
        console.log("Making masala Chai...")
    }
}