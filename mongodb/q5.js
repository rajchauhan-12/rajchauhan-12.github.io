db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
  { $unwind: "$comments" },
  { $project: { _id: 0, post: 1, "comments.comment": 1 } },
]);

db.marks.aggregate([
  { $group: { _id: "$name", AvgScore: { $avg: "$score" } } },
]);

db.marks.aggregate([
  { $group: { _id: "$term", AvgScore: { $avg: "$score" } } },
  { $sort: { _id: 1 } },
]);

db.marks.aggregate([
  { $group: { _id: "$subject", AvgScore: { $avg: "$score" } } },
  { $sort: { _id: 1 } },
]);

db.marks.aggregate([
  {
    $group: {
      _id: { term: "$term", subject: "$subject" },
      AvgScore: { $avg: "$score" },
    },
  },
  { $sort: { _id: 1 } },
]);

db.marks.aggregate([
  { $match: { name: "John" } },
  {
    $group: {
      _id: { term: "$term", name: "$name" },
      AvgScore: { $avg: "$score" },
    },
  },
  { $sort: { _id: 1 } },
]);

db.studentinfo.insertOne({ _id: "s1", name: "John" });
db.studentinfo.insertOne({ _id: "s2", name: "Cathy" });

db.marks.updateMany({}, { $rename: { name: "sid" } });

db.marks.updateMany({ sid: "John" }, { $set: { sid: "s1" } });
db.marks.updateMany({ sid: "Cathy" }, { $set: { sid: "s2" } });

db.studentinfo.aggregate([
  {
    $lookup: {
      from: "marks",
      localField: "_id",
      foreignField: "sid",
      as: "marks",
    },
  },
  {$unwind:"$marks"},
  
  {$group:{_id:"$marks.term",
    AvgScore:{$avg:"$marks.score"}}}
]);


db.employess.aggregate([
    {$project:{id:0,name:1,salary:1,grade:"grade A"}}
    
])

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        grade:{$cond:{
            if:{gt:[$salary,3000]},
            then:"grade A",
            then:"grade B"
        }}}
    },
    {$out:"gradewisesalary"}
])