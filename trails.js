const jwt = require("jsonwebtoken")
const _ = require('lodash')
const user = {
    _id:1,
    name:"ahmed",
    email:"Abdo@gmail.com",
    password:"mkdslkjndsljjsdsds",
    isAdmin:true
}

// console.log(_.pick(user,["_id","isAdmin"]));
const token = jwt.sign(_.pick(user,["_id","isAdmin"]),"mySecretKey")
// console.log(token);

const tokenString ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTEyNzcyMn0.F7wKbW62x0VxMK3LKybJZC04-goFPPG31m6HuJE4BRg"

 const result =jwt.verify(tokenString,"mySecretKey")
 console.log(result);