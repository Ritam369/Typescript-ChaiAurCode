function makeChai(name: string, cups: number){
    return `I would like ${cups} cups of ${name} chai.`;
}

function chai(): string {
    return makeChai("green", 2);
}

function makeOrder(order: string){
    if(!order) return null;
    return order;
}

function logChai(): void {
    console.log("Chai is ready")
}
//void means not returning anything


//optional param
// function makeCoffee(order?: string){

// }


//default param
// function coffeeCup(cups: number = 1){}

//Note: try to keep default param and optional param at the end of the params list


// custom type passing as param
function takeChaiOrder(order: {
    type: string,
    sugar: number,
    milk: boolean
}): string{
    return `Your ${order.type} chai with ${order.sugar} sugar and milk ${order.milk} is ready.`;
}