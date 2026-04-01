const chaiFlavour: string[] = ["masala", "lemon"]
const price: number[] = [10, 20, 30]

const rating: Array<number> = [3.8, 4.5]




//Array of objects

type Chai = {
    name: string,
    price: number
}

const menu: Chai[] = [
    {name: "masala", price: 15},
    {name: "lemon", price: 20}
]




//Readonly array; the array can't be modified

const cities: readonly string[] = ["delhi", "mumbai"]
//cities.push("kolkata") //Error




//2D arrays

const tables: number[][] = [
    [1,2,3],
    [4,5,6]
]




//Tuple: Element order matters

let chaiTuple: [string, boolean, number] = ["masala", true, 15]
chaiTuple.push("lemon",20,false)

console.log(chaiTuple)


let userInfo: [string, number, boolean?]
userInfo = ["Ritam", 13]
userInfo = ["Arohi", 24, false]


const location: readonly [number, number] = [56.78, 98.45]

const players: readonly [number, string][] = [
    [18, "messi"],
    [10, "ronaldo"]
]





//Named Tuple (more preferred)

const chaiItems: [name: string, price: number] = ["masala", 15]





//enum

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

let chaiCup = CupSize.MEDIUM

//Note: If you provide any value to an enum-type then other enum-type will also need values; otherwise auto-incremental would be done

enum StatusCodes {  //providing all values here
    OK = 200,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}
console.log(StatusCodes.OK)

//But

enum StatusCodes2 {  //providing only one values here
    OK = 200,
    NOT_FOUND, //default implicit increment 201
    SERVER_ERROR //202
}



enum chaiType {
    MASALA = "masala",
    LEMON = "lemon",
    GREEN = "GREEN"
}

function makeChai(type: chaiType){
    console.log(`Making ${type} chai`)
}

makeChai(chaiType.MASALA)
// makeChai("masala") //Error


//Note: heterogeneous enum is not at all good practice
// Always use homogeneous means of same datatype

const enum SugarLevel {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}




//Gotchas with tuple
let myTuple: [string, number] = ["ABC",2] 
myTuple.push("XYZ") //This shouldn't be allowed but as the ts is actually converted into js and in js it becomes array; thus don't show any issue