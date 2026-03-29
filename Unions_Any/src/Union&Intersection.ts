type ChaiType = "masala" | "ginger" | "lemon";

function orderChai(chai: ChaiType) {
  return `One cup of ${chai} chai coming up!`;
}
orderChai("masala");


//intersection (&)
type Leaves = {leaves : number}
type Masala = {masala : number}

type MasalaChai = Leaves & Masala

const Chai: MasalaChai = {
  leaves : 10,
  masala : 20
}

//Optional values
type User = {
  name : string,
  bio? : string, //optional
  readonly dbId : number //readonly means can't change again after one set
}

const u1: User = {name: "Ritam", dbId: 12}
// u1.dbId = 13 //error
const u2: User = {name: "Ritam", bio: "I am Ritam", dbId: 12}