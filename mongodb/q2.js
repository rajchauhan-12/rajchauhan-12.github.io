db.employees.insertOne({
    name:"raj chauhan",
    email:"raj@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date: Date()
})

db.employees.find()