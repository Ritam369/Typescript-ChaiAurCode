//Difference between any and unknown
// Any is a type that can be anything, including undefined and null.
// Unknown is a type that can be anything, but it must be checked before it can be used.
// For example, if you have a variable of type unknown, you can't call any methods on it without first checking its type.

//any use korle amra kokhonoi pore type define kore ditam nah variable taar jaar jonno undefined niye nito
//unknown er case e amra initially toh variable taake kono type assign korchi nah thikache, but use korar aage type assign kore dite hbe

//example
let unknownVar: unknown;
unknownVar = "Hello";
unknownVar = 42;
unknownVar = true;

if (typeof unknownVar === "string") {
  console.log(unknownVar.toUpperCase());
} else if (typeof unknownVar === "number") {
  console.log(unknownVar.toFixed(2));
} else if (typeof unknownVar === "boolean") {
  console.log(unknownVar ? "Yes" : "No");
}

// let anyVar: any;
// anyVar = "Hello";
// anyVar = 42;
// anyVar = true;

// console.log(anyVar.toUpperCase());
// console.log(anyVar.toFixed(2));
// console.log(anyVar ? "Yes" : "No");
