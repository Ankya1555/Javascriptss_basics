const marval_heros = [ "thor", "ironman" , "spiderman"  ]
const dc_heros = ["superman", "flash", "batman"]

marval_heros.push(dc_heros)

console.log(marval_heros);
console.log(marval_heros[3][1]);

marval_heros.concat(dc_heros)
console.log(marval_heros);

 // spread operator

const all_new_heros = [...marval_heros,...dc_heros]

console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6,7],7,8,[4,5,[1,3,4]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
 
//make word to array 

console.log(Array.isArray("aniket"));   //false
console.log(Array.from("aniket")); // make it array 
console.log(Array.from({name:"aniket "})); // intresting from view of interview 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));