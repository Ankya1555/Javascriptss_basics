//singleton


// object literals
//  { } object 
const JsUser = {
    name : "aniket",
    // "full name ": "aniket shendge"
    age : 24,
    location: "pune",
    email: "aniketshendge.com",
    isLoggedIn : false,
    lastLoginDays:['Monday',"sunday"]
}

console.log(JsUser.email)
console.log(JsUser.isLoggedIn);
console.log(JsUser.name)
console.log(JsUser.location);

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "aniii"
tinderuser.isLoggedIn =false
console.log(tinderuser);



const course ={
    coursename: "javascript",
    price : 888,
    isFree : false,
    rating : 4.5
    
}
// course.courseInstructor
const {courseInstrcutor:instructor } = course
console.log(instructor)
// {
//     name: "aniket",
//     coursename: "javascrips",
//     price : "free"
// }

// console.log(course.courseInstructor)
// console.log(course.price)
// console.log(course.isFree)
