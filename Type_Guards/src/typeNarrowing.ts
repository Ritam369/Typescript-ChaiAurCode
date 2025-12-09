// same parameter can have two different data types
function getChai(kind: string | number): string {
  if (typeof kind === "string") {
    return `Chai ${kind}`;
  }
  return `Chai ${kind}ml`;
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
// class KulhadChai {
//   serve() {
//     return `Serving Kulhad Chai`;
//   }
// }
// class CuttingChai {
//   serve() {
//     return `Serving Cutting Chai`;
//   }
// }

// function serve(kind: KulhadChai | CuttingChai) {
//   if (kind instanceof KulhadChai) {
//     console.log(kind.serve());
//   } else {
//     console.log(kind.serve());
//   }
// }
