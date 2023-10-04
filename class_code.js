//Data -- Variable -- Container -- Data Types
//1- String " 5 HI "  ' ', `  `
//2- Number ...  4, 3.5
//3- Boolean ... true or false
//4- undefined --
// 5- null
// let, var, const  
//First 6 Chapter Josh Golberg
//any
// let myName:string = "Rehan"
// myName = 5
// console.log(myName)
// Syntax Error  --- Type Error
//explicitly   //implicitly
/* let someThing;
someThing = "Hello";
console.log(someThing)
someThing.toUpperCase()
someThing = 34
console.log(someThing)
someThing.toFixed()
someThing.toUpperCase() */
// type A = string | number
// // type B = string & number
// let myVariable: A = "Rehan"
// type B = "a"
// let myVariable2:B = "b"
// //Type Narrowing ---  
//Type Alias
// type MyCustomType1 = string | number
// //type MyCustomType2 = string & number
// type MyCustomType3 = MyCustomType1 | boolean 
// type Person = {
//     name: string
//     age: number
// }
// let myObject1:Person = {
//     age: 34,
//     name: "Rehan"
// }
// type Student = Person & {
//     rollnumber:number
// }
// type Student = {
//     name:string,
//     age:number,
//     rollnumber:number
// }
// let student1:Student = {
//     name:"Rhan",
//     age: 32,
//     rollnumber:234
// }
// type Poet = {
//     name: string
// }
// let poet1:Poet = {
//     name: "Musa"
// }
// let poet2:Poet = {name: "Ali",age: 32}  //Object Literal 
// let anyThing = {
//     name: "Musa",
//     age: 32
// }
// poet1 = anyThing  //accepts extra property
// poet1 = poet2
//optional properties
// type Book = {
//     author?: string;
//     pages: number;
// };
//     // Ok
// const ok: Book = {
// author: "Rita Dove",
// pages: 80,
// };
// const myObjec3:Book = {
//     pages: 345
// }
// const missing: Book = {
// author: "Rita Dove",
// };
// const missingOptional: Book = {
//     pages:45
// }
// type Book1 = {
//     author:string | undefined
//     pages: number
// }
// const another:Book1 = {
//     pages: 45
// }
//FUNCTIONS
//Parameter Types //Require Parameters //
// function add(a:number,b:number):number{
//     return a + b
// }
// Arrow Function or Lambda Function
// const multiply = (a:number,b:number):number => a*b;
// function type
// //IIFE Immediately Invoked Function Expression
// (function (a:number,b:number){
//     console.log(a+b)
// }(5,8));
// const subtract = function (a:number,b:number){
//     return a - b
// }(10,6);
// console.log(subtract)
// FUNCTION TYPES
// type functionTYpe = (a:number,b:number)=>number 
// let division1:functionTYpe = (a:number,b:number):number=>a/b
// console.log(division1(20,5))
// let division:(a:number,b:number)=>number = function (a:number,b:number){
//     return a/b
// }
// console.log(division(20,5))
// type C = ()=>void 
// type D = (fn:C)=>void
// let function1:C = ()=>console.log("I return nothing")
// let function2:D = (fn:()=>void)=> {
//     console.log('I am function 2')
//     fn()
// }
// function2(function1)
//SEPARATELY DEFINE TYPE
// let singer: (song: string) => string;
// singer = function (song) {
// // Type of song: string
// return `Singing: ${song.toUpperCase()}!`; // Ok
// };
// FUnction Type Aliases
// type StringToNumber = (input: string) => number;
// let stringToNumber: StringToNumber;
// stringToNumber = (input) => input.length;
//Function Parameters can also be type aliased
//Optional Parameter
// function announceSong(song: string, singer?: string):string {
//     console.log(`Song: ${song}`);
//     console.log(`Singer: ${singer}`);
//     return singer
// }
// announceSong("Who I am")
// function announceSong1(song: string, singer: string | undefined) {
//     console.log(`Song: ${song}`);
//     if (singer) {
//     console.log(`Singer: ${singer}`);
//     }
// }
// Default Parameters
// Rest Parameters
// function add5(a:number,b?:number){
//     //Narrowing is must
//     return a + b
// }
// add5(4)
// function anyFunction (a:number,...b:E){
//    //
// }
// anyFunction(1,2,3,4,5,6,6,4,76,8787,)
// type E = number[]
// let myArray: number[] = 
// //Function Overload
// function add7 (a:number,b:number):number
// function add7 (a:string,b:string):string
// function add7(a:any,b:any):number|string{
//     if(typeof a === "number" && typeof b === "number"){
//         return a + b
//     } else if(typeof a === "string" && typeof b === "string") {
//         return a + "" + b
//     }
// }
// console.log(add7("Hi","there"))
// add7(7,"Rehan")
//ARRAYS
// let myArray:number[] = [1,23,4]
// let myArray2:Array<number> = [1,23,4]
// let myArray3 = []
// myArray3.push("hi")
// console.log(myArray3)
// let myArray4: (number|string)[] = [1,2,"HI"] // 4 + 5*4   -- (4 + 5)*4
// const warriors:Array<string> = ["Artemisia", "Boudica"];
// const warriors2:string[]= ["Artemisia", "Boudica"];
// // Ok: "Zenobia" is a string
// warriors.push("Zenobia");
// warriors.push(true);
// ~~~~
// Argument of type 'boolean' is not assignable to parameter of type 'string'.
//Array and Function Types
// type customType = number;
// let myArray1:customType[] = [1,2,4,]
// type customFunctionType = ()=>string
// let myArray2:customFunctionType[] =[   ]   //Which type of elements should be in this Array?
// let myArray3:(()=>string)[] = []
// let myArray4: (string | number)[] = ["s",5]   // a + b * c  ----- answer would be different than (a+b)*c
// let values = []
// //values = ["5","6"]
// values.push("Hello")
// console.log(values)
// values.push("anyother")
// console.log(values)
// values.push(5)
// console.log(values)
// //Multidimensional Arrays
//[element1,element2,element3]
//element1 = 5  ; element1 = "string" ; element1 = { } ; element1 = [];
// let testArray = ["element1","element2","element3"]
// console.log(testArray[0])
// let myArray6:(string[])[] = [
//     ["element1",'element2','element3'],
//     ['element4','element5','element6'],
//     ['element7','element8','element9']
// ]
// console.log(myArray6[0])
// console.log(myArray6[0][1])
// console.log(typeof myArray6[0])
// console.log(typeof myArray6[0][1])
//
// function withElements(elements: string[]) {
//     console.log(elements[1].length); // No type error //// "noUncheckedIndexedAccess":
// // }
// withElements(["It's", "over"]);
// let Array7 = [1,2,3,4]
// let Array8 = ["Hi","My","Name"]
// let Array9 = [...Array7,...Array8]
// console.log(Array9)
// const mySomething = [false,123]
// const myTuple1:[boolean,number,number] = [true,123,456]
// const myTuple2:[boolean,number] = mySomething
// const myTuple2:[boolean,number] = myTuple1
//Tuples as Rest Parameters
/* function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
    }
    const pairArray = ["Amage", 1];
    logPair(...pairArray);

    const pairTupleIncorrect: [number, string] = [1, "Amage"];
    logPair(...pairTupleIncorrect);

    const pairTupleCorrect: [string, number] = ["Amage", 1];
    logPair(...pairTupleCorrect); // Ok */
/*  function logTrio(name: string, value: [number, boolean]) {
    console.log(`${name} has ${value[0]} (${value[1]}`);
    }
    const trios: [string, [number, boolean]][] = [
    ["Amanitore", [1, true]],
    ["Æthelflæd", [2, false]],
    ["Ann E. Dunwoody", [3, false]]
    ];
    trios.forEach(trio => logTrio(...trio)); // Ok
    trios.forEach(logTrio); */
// ~~~~~~~
// Argument of type '(name: string, value: [number, boolean]) => void'
// is not assignable to parameter of type
// '(value: [string, [number, boolean]], ...) => void'.
// Types of parameters 'name' and 'value' are incompatible.
// Type '[string, [number, boolean]]' is not assignable to type 'string'.
//Return Type of Array
//1-explicit type annotation 
//2- const assertion
// let myArray10 = [1,"Rehan"] as const
//DISCLAIMER :::: 
//QUIZ TIPS
//1- Take a simple look over the question, then read the answer options, then read the question carefully. 
//2- Check the options, if multiple options can be selected, there can be multiple answers.
//3- People are saying that you can't skip the question and solve it later
