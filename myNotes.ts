// What is variable -- Variable can be said as a container to store a value.
//Every Variable has a name -- 
// Variable Declaration --  We use var, let and const to declare a variable. 
// var is global scope, let is block scope, const is constant 


// Types in typescript
// string, number, boolean, null, undefined
// let myName:string = 'Rehan';
// let myNumber:number = 5;
// let myBoolean:boolean = true;
// let myNull:null = null;
// let myAnything:undefined = undefined
// let anyVar;

//Evolving Type

/* let someThing;
someThing = "Hello";
someThing.toUpperCase()
console.log(someThing)
someThing = 234
someThing.toFixed()
console.log(someThing)
someThing.toUpperCase()   //Error */

// Type Theory from Set Theory

// let myName: string = 'Rehan';
// let fnameOptions:'M' | 'Muhammad' | 'OR' = "Muhammad";
// myName = 'Musa';
// myName = fnameOptions
// both assignable, string subset of string, string literal of string
//fnameOptions = myName  //Not assignable

//Type inference
// let a = 5;
// a = "Hello"

// let ranValue = Math.random()>0.5?"Hi":"hello"
// const anyNewvar:string = ranValue
// const anyNewvar1 = ranValue as string
// console.log(anyNewvar)

//never -- Bottom Type
// let a:number = 5
// let b:never;
// b = a   // No type can be assigned to type never.
// a = b   // Allowed but this never happens


//unknown -- Top Type -- Universal Type -- Every other type is subset of 'Unknown'
//So every type is assignable to unknown but unknow can't be assigned to any type
// let a:number = 5
// let b:unknown;
// b = a   // Assignable
// a = b   // Not allowed

//Special type 'any' means no type or simply saying typescript to stop type checking. 


//Type Error v/s Syntax Error

// let myNumber:number = 34
// let myString:string = "hello"
// myNumber.toString()
// myString.toString()
// let newVar:number | string;
// newVar = Math.random() > 0.5? "Marie Curie": 84;
// newVar.toUpperCase()
// newVar.toFixed()
// newVar.toString()
// if(typeof newVar === "string"){
//     newVar.toUpperCase()
// } else {
//     newVar.toFixed()
// }


// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof '')


//All values in JavaScript are truthy except for those defined as falsy: false, 0, -0, 0n, "", null, undefined, and NaN.

// if(-0){
//     console.log("True: If Statement runs")
// }else {
//     console.log("False: Else Statement runs")
// }


//Type Alias

// type MyCustomType1 = string | number
// //type MyCustomType2 = string & number
// type MyCustomType3 = MyCustomType1 | boolean 

// type Person = {
//     name: string
//     age: number
// }

// type Student = Person & {
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

// let poet2:Poet = {
//     name: "Ali",
//     age: 32
// }
// let poet3 = {
//     name: "Ali",
//     age: 32
// }

// poet1 = poet3  //accepts extra property

// type Book = {
//     author?: string;
//     pages: number;
// };
//     // Ok
// const ok: Book = {
// author: "Rita Dove",
// pages: 80,
// };
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



// const poem = Math.random() > 0.5
// ? { name: "The Double Image", pages: 7 }
// : { name: "Her Kind", rhymes: true };
// Type:
// {
// name: string;
// pages: number;
// rhymes?: undefined;
// }
// |
// {
// name: string;
// pages?: undefined;
// rhymes: boolean;
// }
// poem.name; // string
// poem.pages; // number | undefined
// poem.rhymes; // booleans | undefined

// type PoemWithPages = {
//     name: string;
//     pages: number;
//     };
//     type PoemWithRhymes = {
//     name: string;
//     rhymes: boolean;
//     };
//     type Poem = PoemWithPages | PoemWithRhymes;
//     const poem: Poem = Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7 }
//     : { name: "Her Kind", rhymes: true };
//     poem.name; // Ok
//     poem.pages;
//     // ~~~~~
//     // Property 'pages' does not exist on type 'Poem'.
//     // Property 'pages' does not exist on type 'PoemWithRhymes'.
//     poem.rhymes;
//     // ~~~~~~
//     // Property 'rhymes' does not exist on type 'Poem'.
//     // Property 'rhymes' does not exist on type 'PoemWithPages'.


//FUNCTIONS

//Parameter Types //Require Parameters //
// function add(a,b){
//     return a + b
// }


//Arrow Function or Lambda Function

// const multiply = (a:number,b:number):number => a*b;

//function type
//IIFE
// (function (a:number,b:number){
//     console.log(a+b)
// }(5,8));

// const subtract = function (a:number,b:number){
//     return a - b
// }(10,6);
// console.log(subtract)


//FUNCTION TYPES
// let division:(a:number,b:number)=>number = (a:number,b:number)=>a/b
// console.log(division(20,5))
// let division:(a:number,b:number)=>number = function (a:number,b:number){
//     return a/b
// }
// console.log(division(20,5))

// let function1:()=>void = ()=>console.log("I return nothing")

// let function2:(fn:()=>void)=>void = (fn:()=>void)=> {
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
// function announceSong(song: string, singer?: string) {
//     console.log(`Song: ${song}`);
//     if (singer) {
//     console.log(`Singer: ${singer}`);
//     }
// }

// function announceSong1(song: string, singer: string | undefined) {
//     console.log(`Song: ${song}`);
//     if (singer) {
//     console.log(`Singer: ${singer}`);
//     }
// }

// Default Parameters
// Rest Parameters

//Return Types

//By default return type

// function myFunction3():void{
//     console.log("HI")
// }
// console.log(myFunction3())

// let testVar = myFunction3()
// console.log(testVar)
// function singSongs(songs: string[]):number {
//     for (const song of songs) {
//     console.log(`${song}`);
//     }
//     return songs.length;
// }

//Function Overload
/* function add (a:number,b:number):number
function add (a:string,b:string):string
function add(a:number|string,b:number|string):number|string{
    if(typeof a === "number" && typeof b === "number"){
        return a + b
    } else if(typeof a === "string" && typeof b === "string") {
        return a + "" + b
    } else {
        return "its done"
    }
} */


//ARRAYS

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
// let myArray2:customFunctionType[] =[]   //Which type of elements should be in this Array?

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

// //[element1,element2,element3]
// //element1 = 5  ; element1 = "string" ; element1 = { } ; element1 = []
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
//     console.log(elements[1].length); // No type error //// "noUncheckedIndexedAccess": true, 
// }
// withElements(["It's", "over"]);

// let Array7 = [1,2,3,4]
// let Array8 = ["Hi","My","Name"]
// let Array9 = [...Array7,...Array8]


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



//QUIZ TIPS
//1- Take a simple look over the question, then read the answer options, then read the question carefully. 
//2- Check the options, if multiple options can be selected, there can be multiple answers.
//3- People are saying that you can't skip the question and solve it later
