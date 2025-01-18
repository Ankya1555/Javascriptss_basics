 const name  ="aniket-asfda "
 const repoCount = 50

 console.log(name+repoCount+"value");  // old sysntax

// console.log('hello my name is ${} and  my repo count is $ {repoCount}')
 
const gameName = new String ('Aniket')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,4)
console.log(anotherString);


const newStringOne = "  aniket   "
console.log(newStringOne);
console.log(newStringOne.trim());


//repalce

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log( url.replace('%20','-'))
console.log(url.includes('sundar'))



console.log(gameName.split('-'));
