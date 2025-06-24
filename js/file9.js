//promises...........

// function f1(){
    // setTimeout(()=>{
    //     return 5;
    // },1000)
    // return 5;

//     return new Promise((resolve, reject) => {
//         resolve(5);
//         reject("something went wrong");
//     });


// }

// function f2(x){
//     console.log(x+4);
// }

// f1().then((n) => f2(n));
// f1().catch((err)=> console.log(err));

// const n=f1()
// const result = f2(n);

// console.log(result);


fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data)=> {
        data.map(value =>{
            console.log(value.name)
        })
    })


    .catch((err) => console.log(err));
