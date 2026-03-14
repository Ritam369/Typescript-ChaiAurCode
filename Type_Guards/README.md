# Type Conversion in TypeScript

TypeScript, being a statically typed superset of JavaScript, supports **type conversions** (also known as *type casting*) to convert values from one type to another. Type conversion is especially useful when working with variables of type `any`, DOM elements, API responses, or complex union types.

---

## ## Types of Type Conversion

## 1. **Implicit Conversion (Type Coercion)**
TypeScript (and JavaScript) automatically converts between types when needed.

```typescript
let num: number = 10;
let str: string = "The number is " + num; // number is implicitly converted to string
console.log(str); // Output: "The number is 10"
```

Implicit conversions are convenient but can sometimes produce unexpected results, so be cautious.

---

## 2. **Explicit Conversion (Type Casting)**
You explicitly tell TypeScript to treat a variable as another type.
Commonly used when working with `any`, external libraries, or DOM elements.

### a) Angle-bracket syntax
```typescript
let someValue: any = "123";
let strLength: number = (<string>someValue).length;
console.log(strLength); // Output: 3
```

### b) `as` syntax (recommended)
```typescript
let someValue: any = "456";
let strLength: number = (someValue as string).length;
console.log(strLength); // Output: 3
```

`as` syntax is preferred in JSX/React because angle-bracket syntax conflicts with JSX elements.

---

## 3. **Number Conversion**
Convert between strings and numbers using built-in functions.

```typescript
let numStr: string = "100";
let num1: number = Number(numStr); // convert string to number
let num2: number = parseInt(numStr); // convert string to integer
let num3: number = parseFloat("12.34"); // convert string to float
console.log(num1, num2, num3); // Output: 100 100 12.34
```

---

## 4. **String Conversion**
```typescript
let num: number = 250;
let str: string = num.toString();
console.log(str); // Output: "250"
```

---

## 5. **Boolean Conversion**
```typescript
let value1: number = 0;
let bool1: boolean = Boolean(value1); // false

let value2: string = "hello";
let bool2: boolean = Boolean(value2); // true

console.log(bool1, bool2); // Output: false true
```

---

## 6. **Type Assertions with DOM Elements**
TypeScript often needs explicit type assertions for HTML elements.

```typescript
const inputElement = document.getElementById("myInput") as HTMLInputElement;
inputElement.value = "Hello TypeScript";
```

Without the assertion, TypeScript would treat `inputElement` as a generic `HTMLElement`, which doesn’t have a `.value` property.

---

# ⭐ Type Guards in TypeScript (Detailed Explanation)
Type Guards are **special runtime checks** that allow TypeScript to narrow down the type of a variable inside a conditional block.

They ensure safer access to properties and methods depending on the actual type.

Type Guards are extremely important when using:
- union types
- `any` values
- DOM elements
- object-oriented hierarchies

---

## ## Why Type Guards Are Needed
If a variable can be multiple types (e.g., `string | number`), TypeScript prevents you from using methods that may not exist.

### Example without type guard:
```typescript
function printLength(value: string | number) {
  console.log(value.length); // ❌ Error: number has no length
}
```

We need a **type guard** to handle each type safely.

---

# ## Built-In Type Guards

## 1. **typeof Type Guard**
Used for primitive types: `string`, `number`, `boolean`, `symbol`, `undefined`, `bigint`.

```typescript
function printValue(x: string | number) {
  if (typeof x === "string") {
    console.log(x.toUpperCase()); // OK
  } else {
    console.log(x.toFixed(2)); // OK
  }
}
```

---

## 2. **instanceof Type Guard**
Used for class-based objects.

```typescript
class Car {
  drive() { console.log("Driving..."); }
}

class Bike {
  ride() { console.log("Riding..."); }
}

function useVehicle(v: Car | Bike) {
  if (v instanceof Car) {
    v.drive();
  } else {
    v.ride();
  }
}
```

---

## 3. **in Operator Type Guard**
Checks if a property exists in an object.

```typescript
interface User {
  name: string;
}

interface Admin {
  name: string;
  isAdmin: boolean;
}

function checkRole(person: User | Admin) {
  if ("isAdmin" in person) {
    console.log("Admin user");
  } else {
    console.log("Normal user");
  }
}
```

---

# ## Custom Type Guards
You can create your own type guards using the `value is Type` syntax.

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

function show(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Custom type guards **teach the TypeScript compiler** how to correctly narrow types.

---

# ## Key Points
- Use **`as`** syntax over angle brackets for React compatibility.
- Implicit conversions can cause bugs → prefer **explicit** conversions.
- Use type guards (`typeof`, `instanceof`, custom guards) when working with union types.
- Type guards improve **type safety, readability, and maintainability**.

---

# ## Summary
Type conversion in TypeScript ensures that variables are interpreted as the correct type. 
Type guards help TypeScript *understand* what type a variable is at runtime, allowing safe access to its properties. Together, these concepts make TypeScript powerful, safe, and expressive.

---

# ## Usage Example
```typescript
let input: any = "2025";
let year: number = Number(input); // Explicit conversion
console.log(`The year is ${year}`); // Output: The year is 2025
