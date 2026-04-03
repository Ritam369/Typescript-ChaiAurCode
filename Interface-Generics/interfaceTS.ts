interface Chai {
    flavour : string;
    price : number;
}

const masalaChai: Chai = {
    flavour : "masala",
    price : 10
}



interface Shop{
    readonly id: number;
    name: string;
}

const s:Shop = {
    id: 1,
    name: "abc"
}

// s.id = 2 //Shows error



// Taking methods into an interface

interface DiscoutCoupon {
    // (price: number): number;

    // discountCalculate(price: number): number;
    discountCalculate : (price: number) => number;
}

// const apply50: DiscoutCoupon = (price) => {
//     return price / 2;
// }

const apply50: DiscoutCoupon = {
    discountCalculate(price){
        return price / 2;
    }
}




interface TeaMachine{
    start(): void;
    stop(): void;
}

const chaiMachine: TeaMachine = {
    start() {
        console.log("machine started")
    },
    stop() {
        console.log("machine stopped")
    }
}




//Automatic merging of types in same interface
interface User{
    name: string;
}

interface User{
    age: number;
}


const user: User = {
    name : "Charles",
    age : 25
} //Both should be satisfied, both the interfaces due to having samme name are getting merged


//Note due to this feature, multiple inheritence supported by the use of interface

interface A {name: string}
interface B {age: number}

interface C extends A,B {}






//index signatures
//not used that much so try to avoid

interface ChaiRatings{
    [flavour: string]: number;
}

const rating: ChaiRatings = {
    masala: 4.2,
    ginger: 4.5,
}