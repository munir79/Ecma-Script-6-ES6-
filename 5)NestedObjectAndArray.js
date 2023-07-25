//1. Nested objects and array and find element

const data={
    count:5000,
    data:[
      { id:1,name:'Jakir',job:'student'},
      {id:2,name:'munir',job:'frelancer'},

    ]
}

console.log(data.data[0].job);


//2. 

const user={
    id:201002050,
    name:"jakir hossain Munir ",
    address:{
        street:{
          first:103,
          floor:'second',
          second:'ca'

        },
        postofice:'nandina',
        city:'Jamalpur'
        
    }
}
const userfloor=user.address?.street?.second;
console.log(userfloor);
