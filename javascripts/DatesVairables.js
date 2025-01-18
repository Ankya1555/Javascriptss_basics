console.log("hello date");



// date


let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(typeof myDate); // object 

let myCreatedDate = new Date(2025,6,22)
let myCreatedDatetwo = new Date(2025,0,18)
let myCreatedDatethree =  new Date("2025-01-19")

console.log(myCreatedDate.toDateString());
console.log(myCreatedDatetwo.toLocaleDateString());
console.log(myCreatedDatethree.toLocaleDateString());
 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+3);
console.log(newDate.getDay());



newDate.toLocaleString('default',{
    weekday: "long",

})



