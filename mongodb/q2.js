db.employees.insertOne({
    name:"raj chauhan",
    email:"raj@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date: Date()
})


db.employees.insertMany({
    name:"parth sharma",
    email:"party@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date: Date()
})

db.employees.find()

// db.employees.insertOne([
//     {name:"parth", age :21},
// ])

// db.employees.insertMany([
//     {name:"parth", age :21},
// ])
