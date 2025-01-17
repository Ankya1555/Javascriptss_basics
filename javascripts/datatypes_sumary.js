// primitive data types 

// rere are 7 types  : String  , Number ,Boolean , null , Undefined , 
// Symbol ,Bigint 
// it alway call by value data types 

const score = 100 
const scoreValue = 100.3 
const isLoggedIn = false
const outsideTemp =null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol('123')
 

const bigNumber = 234792374n



 // Reffernce types (non pri,itive Data type)

 // Array , objects , Functions 


 const heros = ["shaktiman", "naagraj", "dogaa"   ]

let mybj =  {
    name : "aniket"
   // age : 24 ,

 }

 const myFunctions =  function(){
    console.log("hello woorld");

 }
 console.log(typeof outsideTemp)

 // javascript dyanamic type language or staticaly type lngause hai ..?
 //  ==>  JavaScript is a dynamically typed language, not a statically typed language.
 let x = 10; // x is a number
x = "Hello"; // Now x is a string
// for refference notes

//  https://262.ecma-international.org/5.1/#sec-11.4.3
