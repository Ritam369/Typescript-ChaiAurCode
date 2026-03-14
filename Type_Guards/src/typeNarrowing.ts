// same parameter can have two different data types
function getChai(kind: string | number): string {
  if (typeof kind === "string") {
    return `Chai ${kind}`; //By this, can have the in-built methods of string only
  }
  return `Chai ${kind}ml`; //By this, can have the in-built methods of number only
}

console.log(getChai("Black"));
console.log(getChai(250));

//Might be a chance that a parameter is not passed (optional)
function serveChai(msg?: string) {
  //msg? means optional parameter (pass hoteo pare abr nao hote pare)
  if (msg) {
    console.log(`Serving ${msg} chai`);
    return;
  }
  console.log("Serving default chai");
}

serveChai("Black");
serveChai();

//Exhaustive datatype checking
function orderChai(order: "small" | "medium" | "large" | number) {
  if (order === "small") return `small cutting chai..`;
  else if (order === "medium" || order === "large") return `make extra chai..`;
  return `order ${order}ml chai`;
}

console.log(orderChai("small"));
console.log(orderChai("medium"));
console.log(orderChai(250));

//Type-Guards
class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}
class CuttingChai {
  serve() {
    return `Serving Cutting Chai`;
  }
}

function serve(kind: KulhadChai | CuttingChai) {
  if (kind instanceof KulhadChai) {
    console.log(kind.serve());
  } else {
    console.log(kind.serve());
  }
}


//Creating our own class by using 'type' keyword
type ChaiOrder = {
  name : string;
  sugarLevel: number;
}

function prepareChai(obj: any /* unknown dile error show korche karon ekdom seshe deoa*/):obj is ChaiOrder { //ChaiOrder er object return korate hbe
  return (
    typeof obj === "object" && obj!=null && typeof obj.name === "string" && typeof obj.sugarLevel === "number"
  )
} 

function servingOrder(item: ChaiOrder | string) {
  if (prepareChai(item)) {
    console.log(`Serving ${item.name} chai with sugar level ${item.sugarLevel}`);
  } else {
    console.log(`Serving ${item} chai`);
  }
}

servingOrder({name: "Masala", sugarLevel: 3});
servingOrder("Ginger");


type MasalaChai = {type: "masala", spiceLevel: number};
type GingerChai = {type: "ginger", gingerAmount: number};
type ElaichiChai = {type: "elaichi", elaichiPods: number};

type AnyChai = MasalaChai | GingerChai | ElaichiChai;

function prepareSpecialChai(chai: AnyChai){
  switch (chai.type) {
    case "masala":
      return `Preparing masala chai with spice level ${chai.spiceLevel}`;   
      break;
    case "ginger":
      return `Preparing ginger chai with ginger amount ${chai.gingerAmount}`;   
      break;
    case "elaichi":
      return `Preparing elaichi chai with elaichi pods ${chai.elaichiPods}`;   
      break;  
    default:
      return `Give this MF a black coffee!`;
  }
}

function brewChai(chai: MasalaChai | GingerChai){
  if("spiceLevel" in chai){
    return `Brewing masala chai with spice level ${chai.spiceLevel}`;
  } else {
    return `Brewing ginger chai with ginger amount ${chai.gingerAmount}`;
  }
}


//Difference between unknown and any, when to use and when not.
//unknown dile ami sei variable taake as a object bhebe taar props access korte parbo nah,korte chaile aage thakte bole dite hbe...jekhane kina any use korle ami sei variable taake niye jaa kichui kori nah kno kono problem hbe nah
// The unknown type in TypeScript is a top type that serves as a type-safe alternative to any, designed to prevent unsafe operations on values whose types are not known at compile time.
//  Unlike any, which permits any operation without type checking, unknown requires explicit type checking or assertion before use, thereby enhancing type safety.
//  This type is assignable to any and unknown itself, but not to any other specific type unless narrowed through type guards or assertions.
//https://mariusschulz.com/blog/the-unknown-type-in-typescript