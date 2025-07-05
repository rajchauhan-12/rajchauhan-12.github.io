import bcrypt from 'bcrypt'
// const pwd = "pass1234"
// const hashedpwd = await bcrypt.hash(pwd,10)
// console.log(hashedpwd)
const check = await bcrypt.compare("pass1234","$2b$10$VXQjKGIBgx5i0BmTMcQ8q.VjMlVVqVRugSdR/vX6ke4l81NkAeQgK")
console.log(check)

