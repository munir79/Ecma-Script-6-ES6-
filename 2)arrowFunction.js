// 1. arrwow function

const add=function(first,last){
    return a=first+last;
}

const add6=(first,last)=>first+last; // here (first,last are parameter ) and ( =>first+last are return value)
const result=add6(10,20);
console.log(result);

const result1=add6(30,40);
console.log(result1);

//2. no parameter

const getpie=()=>3.14;

// 3. one parameter 

const num=(num)=>num*2;
// or 
const num1=num=>num23*2;

// note if you have multiline in return then you should wirte retun:

const add10=(x,y,z)=>{
    const num1=x;
    const num2=y;

    const sum=num1+num2;
    return sum;

}

const total=add10(10,100,30);
console.log(total);