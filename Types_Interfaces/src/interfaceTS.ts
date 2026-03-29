type ChaiOrder = {
    type: string,
    sugar: number,
    strong: boolean
}

function makeChai(order: ChaiOrder) {
    console.log(order)
}

function serveChai(chai: ChaiOrder) {
    console.log(chai)
}

//type as object
type Chai = {
    water: number,
    sugar: number,
    milk: number,
}

//As interface
// interface Chai {
//     water: number,
//     sugar: number,
//     milk: number,
// }

class MakeChai implements Chai{
    water = 100;
    sugar = 2;
    milk = 50;
}

//But when we won't take a simple object as the type then it will give error

// type CupSize = "small" | "medium" | "large"
//Note: This customised type is often callsed as "Literal Type"

interface CupSize{
    size: "small" | "medium" | "large"
}

class MakeCup implements CupSize{ //A class can only implement an object type or intersection of object types with statically known members. Means works when type is simple object but for customised datatype, it won't work 
    size: "small" | "medium" | "large" = "medium"
}



// type Response = {ok: true} | {ok: false} //Won't work due to same issue like the prev

interface Response {
    ok: boolean;
}

class MyRes implements Response{
    ok: boolean = true;
}