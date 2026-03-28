// let value: any;

// value = 42;
// value = "Hello, world!";
// value = true;

// console.log(value.toUpperCase()); //Run korbe nah thik i, buut lekhar somoy teo kono error show korche nah

let value2: unknown;
value2 = 42;
value2 = "Hello, world!";
value2 = true;

// console.log(value2.toUpperCase()); //Run korar aagei error show kore dicche

//To solve this, we need to use type-narrowing
if (typeof value2 === "string") {
  console.log(value2.toUpperCase());
}
