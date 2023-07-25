//1.  map in array 
const numbers=[12,45,78,90,56,100];
const half=numbers.map(x=>x/2);
console.log(half);
const third=numbers.map(y=>y/3);
console.log(third);
// map is on every element on array or object
const name1=['munir','jakir','hossain','kalam','jamal'];
const all =name1.map(x=>x);
console.log(all);


//2. map i object
const products=[
    {id:2,name:'leptop',price:'10k'},
    {id:3,name:'mobile',price:'20k'},
    {id:4,name:'camera',price:'30k'},
    {id:5,name:'watch',price:'40k'},
]

const item=products.map(product=>console.log(product));
const Pname=products.map(pr=>pr.name);
console.log(Pname);
