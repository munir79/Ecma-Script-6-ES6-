//1 . destructuring 

const {age,name}={name:"munir",age:56};
console.log(age);

//2. object destructuring 

const mobile={
    name1:'samsung',
    price:100000,
    camera:'48 megapixel',
    battery:"4000 A",
    Ram:"8Gb"
}

const {name1,price,camera,Ram,}=mobile;
console.log(Ram);

//3. Array destructuring 

const [first,last]=[12,14,16];
console.log(first);

const country=['bangladesh','India','pakistan','Saudi'];

const [my,out]=country;
console.log(my);

// important
function getName(){
    return ['bangladesh','India'];
}
const [my1,out1]=getName();
console.log(my1);