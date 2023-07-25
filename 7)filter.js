//1.filter in array

const numbers=[120,140,45,9,87,8,7,20,65];
const bigNumbers=numbers.filter(n=>n>30);
console.log(n=bigNumbers);

//2. filter in object 
const products=[
    {id:2,name:'leptop',price:'10k'},
    {id:3,name:'mobile',price:'20k'},
    {id:4,name:'camera',price:'30k'},
    {id:5,name:'watch',price:'40k'},
]

const highPrice=products.filter(n=>n.price>'20k');
console.log(highPrice);

// 3. find is also same but it return of first match