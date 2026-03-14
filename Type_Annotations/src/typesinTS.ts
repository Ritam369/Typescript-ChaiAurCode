//Type Annotation - explicitly bolte hoyy kon type er
//Type Inference - automatically type detect kore neyy

//Example of Type Inferencing
//Automatically detects default datatypes
let name = "Ritam" //name er upor hover korle bujhe jabe je name: string
let cups = Math.random() > 0.5 ? 10 : 5 //hover korlei bujhe jabe je cups: number
let plates = Math.random() > 0.5 ? 10 : "4" //plates: number | string 

//Example of Type Annotation
let username: string = "Ritam369" //Explicitly defining the type of the variable
let age: number = 21
let isActive: boolean = true

console.log(name, cups, plates, username, age, isActive)
