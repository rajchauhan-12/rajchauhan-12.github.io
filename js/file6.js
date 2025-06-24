//array............

// const score= [2,17,5,3];
// console.log(score);
// console.log(score[0]);
// score.push(9);

// console.log(score);
// console.log(score.length);

// const newscore = [score,9]
// console.log(newscore);


const products = [
    { id:1 , name:"product1",price:25},
    { id:2 , name:"product2",price:50},
    { id:3 , name:"product3",price:75},
];

function addCart(id){
    cart = {...cart,[id]:1};
}

addCart(1)
addCart(2)
console.log(cart);
