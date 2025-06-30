db.post.insertOne({
  title: "First Post",
  content: "This is a sample post",
  author: "Admin"

});


db.comment.insertOne({
  postId: 1,
  content: "This is a comment",
  author: "User1"
});


db.post.insertMany([
  { _id_post: "p1", title: "Post 1", content: "This is the first post" },
  { _id_post: "p2", title: "Post 2", content: "This is the second post" }
]);

db.comment.insertMany([
  { _id: "c1", pid: "p1", comment: "This is comment 1 on post 1" },
  { _id: "c2", pid: "p1", comment: "This is comment 2 on post 1" },
  { _id: "c3", pid: "p2", comment: "This is comment 1 on post 2" },
  { _id: "c4", pid: "p2", comment: "This is comment 2 on post 2" },
  { _id: "c5", pid: "p2", comment: "This is comment 3 on post 2" }
]);





db.post.aggregate([
  {
    $lookup: {
      from: "comment",           
      localField: "_id_post",    
      foreignField: "pid",       
      as: "comments"           
    },
  },
]);



db.post.aggregate([
  {
    $lookup: {
      from: "comment",           
      localField: "_id_post",    
      foreignField: "pid",       
      as: "comments"           
    },
  },
  {$project:{_id:0,post:1,"comments.comment":1}}
]);