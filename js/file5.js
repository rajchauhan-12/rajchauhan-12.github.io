// objetcts

// const student ={
//     name:"Harsh",
//     age : 21,
// }

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student["name"]);
// student.city("Amritsar");

// const keys = Object.values(student);
// console.log(keys);

// const values = Object.values(student);
// console.log(values);

const cart = {
    1:5,
    3:1,
    5:2
};

const items = Object.keys(cart).length
console.log(items);

cart[3] = 2;
console.log(cart);

cart[3]=cart[3]-1
console.log(cart);

cart[3]=cart[3]-1
console.log(cart);