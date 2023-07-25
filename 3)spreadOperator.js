//1. spread 
const numbers=[12,39,999,22,45]
const largest=Math.max(numbers); 
// console.log(largest);// output NaN
// console.log(...numbers); // output 12,39,999,45

const large=Math.max(...numbers);
console.log(large);

const numbers1=[...numbers];
console.log(numbers1);
numbers1.push(43);

//2. spred operator and new element in array at same time 
const numbers2=[...numbers,12];
console.log(numbers2);

