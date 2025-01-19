// console.log("A");
// console.log("b");
// console.log("c");

// function sayMyname(){
// console.log("A");
// console.log("b");
// console.log("c");

// }
// sayMyname();
// function addTwonumbers (number1 ,number2 ){
//     let sum = number1 + number2;
//     return sum;

// }
// console.log(number1 + number2);
// const result = addTwonumbers(5, 7);
// console.log(result);
// // console.log(number1 + number2);


function loginUserMessage(username){
    if(username == undefined){
        console.log("pls enter a user name ");
        return // not moves next lines
    
    }
    return `${username} just looged in `
}
 //console.log(loginUserMessage("aniket"))
// console.log(loginUserMessage())

function calculateCarPrice(val1 , val2 , ...num1){
    return num1

}
// console.log(calculateCarPrice(200,400,500, 2000));
// ... three dot is used to pass multiple arguments in a function
// function calculateCarPrice(num1,num2,num3){
//     return num1+num2+num3
 

const user ={
    username: "anikeet",
    price : 155
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is {anyobject.price}`);

    
}

handleObject({
    username: "aniket",
    price : 155
    })// we can pass object as an argument in a function
const myNewArray = [1,2,3,4,5]
function handleArray(anyarray){
    console.log(anyarray);
}
