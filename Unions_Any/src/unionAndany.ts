//union - when it's not ceratin that what will be the datatype of a variable then we use union

//Example of union
let subs: string | number = "1M" //100 possible

//Real life application
let apiRequestStatus: "pending" | "error" | "success" = "pending"
// apiRequestStatus = "done" //Not allowed, datatype should be from the defined/assigned ones for the variable

let airlineSeat: "aisle" | "middle" | "window" = "aisle"

console.log({ subs, apiRequestStatus, airlineSeat })

//any - when we don't want to specify any datatype or any specified value for a variable then we use any
//We will try to avoid any, but might need to use as per the requirement

let currentOrder //if we don't assign anything then it will take cuurrentOrder: any
let orders = ['10','23','56']

for(let order of orders){
  if(order === '23'){
    currentOrder = '23'
    break;
  }
}

console.log(currentOrder)

//In TypeScript, the any type is a special type that disables compile-time type checking for a variable. It tells the compiler: "I don’t know the type here, so trust me and skip checks." This is useful when working with dynamic data such as user input, third-party APIs, or migrating JavaScript code to TypeScript.
/*Best Practices:

Avoid overusing any as it removes TypeScript’s safety.

Prefer union types or unknown when possible for better type safety.

Use any only when type information is truly unavailable.
*/