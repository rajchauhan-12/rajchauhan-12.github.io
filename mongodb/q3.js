// use employees

db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: new Date()
});

db.employees.insertMany([
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["FL", "TX"],
    date: new Date()
  },
  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    date: new Date()
  },
  {
    name: "Amy",
    email: "amy@gmail.com",
    department: "HR",
    salary: 2000,
    location: ["NY", "TX"],
    date: new Date()
  },
  {
    name: "Rafeal",
    email: "rafeal@gmail.com",
    department: "Admin",
    salary: 1500,
    location: ["OH", "TX"],
    date: new Date()
  }
]);

db.employees.find();
db.employees.find().skip(1);
db.employees.find().skip(1).limit(1);
db.employees.find({ department: "IT" });

db.employees.find(
  { department: { $eq: "IT" } },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find(
  { salary: { $gt: 3000 } },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find(
  { salary: { $gte: 3000 } },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find(
  { salary: { $lt: 3000 } },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find(
  { salary: { $lte: 3000 }, department: "IT" },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find(
  {
    $or: [
      { salary: { $lte: 3000 } },
      { department: "IT" }
    ]
  },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find({ department: { $eq: "IT" } });

db.employees.find({ department: { $ne: "IT" } });


db.employees.updateOne(
    {email: "Rafeal@gmail.comm"},
    {$set: {name:"Krish", department:"HR",salary:2700}},
    {upsert: true}
);

db.employees.deleteOne({email:"krish@gmail.com"})

db.employees.deleteMany({department:"Admin"})


db.employees.find().sort({ salary: 1 });

db.employees.find({},{_id:0,name:1})

db.employees.find({},{_id:0,Empname:"$name"})

db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
);