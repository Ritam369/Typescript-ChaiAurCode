function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Ritam"));
console.log(greet(32)); //Though it's showing error due to type mismatch but still giving output because internally there's a process that internally convert ts to js

//type bojhanor jonno variable er por : diye data-type lekha hoyy
// ki datatype er parameter pass hbe taar jonno name er por : string
// ki output return hbe taar jonno definition er aage : string deoa
