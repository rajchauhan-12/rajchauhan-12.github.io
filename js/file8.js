//json 

const student = '{"name" : "raj" , "age": 21}'
const obj = JSON.parse(student)
console.log(obj);
console.log(JSON.stringify(obj))