const chaiObject = {
    name: "masala chai",
    price: 20,
    isHot: true,
}

// Automatic Type-Inference
// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }


// Declaring Object Types

let Chai : {
    name: string;
    price: number;
    isHot: boolean;
}

Chai = {
    name: "lemon chai",
    price: 10,
    isHot: true,
}


//Type-aliases

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

let chaiOrder: Tea = {
    name: "ginger chai",
    price: 15,
    ingredients: ["water", "chai masala", "ginger", "mint"],
}


//Duck Typing

type CupSize = {size: string}
let smallCup: CupSize = {size: "200ml"}
let largeCup = {size: "500ml", material: "ceramic"}

smallCup = largeCup
console.log(smallCup, largeCup)


type brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "african"}

const chaiBrew: brew = coffee



//Datatypes Split-out

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: number,
    items: Item[], //Array of Item
    address: Address
}



//Manipulating type

type ChaiDetails = {
    name: string,
    price: number,
    isHot: boolean,
}

const updatesChai = (updates: Partial<ChaiDetails>) => {
    console.log(`Updating chai details: ${JSON.stringify(updates)}`)
}

// Note: Partial --> Make all properties in Data-type optional

console.log(updatesChai({name: "masala chai", price: 20}))
console.log(updatesChai({isHot: false}))
console.log(updatesChai({}))



type ItemDetails = {
    name?: string;
    order?: string;
}

const updateItemType = (updates: Required<ItemDetails>) => {
    console.log(`Updating item details: ${JSON.stringify(updates)}`)
}

//Note: Make all properties in Datatype required

// updateItemType({}) //This will show error that fields are required




//Pick

type CarBlueprint = {
    color: string;
    wheels: number;
    company: string;
    price: number;
}

type CarSpecs = Pick<CarBlueprint, "color" | "company">

// Note: From any specific Datatype, pick a set of properties whose keys are in the union

const bmwCar: CarSpecs = {
    color: "black",
    company: "BMW"
}




//Omit

type NewChai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredient: string[];
}

type PublicChai = Omit<NewChai, "ingredient">
