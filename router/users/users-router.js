const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const users = require("./users-model");
const jwt = require("jsonwebtoken")

const register = async(user,type,res,req) => {
  console.log(user)
if (type == "Default"){
  if (!user.username || !user.password || !user.email) {
    return res.status(400).json("Please add username, email and password fields");
  }
  if (typeof user.username !== "string" || typeof user.password !== "string" || typeof user.email !== "string" ) {
    return res.status(400).json("Username, email or password cant be integers");
  }
}
  if( type == "Default" && await users.findOne({
    email:user.username})
  ){
    return res.status(402).json("User already exsist")
  }
  user.password = user.password ? user.password : "wedfrgdw"
    let hash = bcrypt.hashSync(user.password,13)
  user.password = hash

  user.id = `${type}_${await users.countDocuments() + 1}`

  await users.create(
      user
)
  try {
  res.json({"username":user.username,"id":user.id,"email":user.email});
  } catch (e) {
    console.log("failed")
    res.json({ msg: e });
  }
}
router.get("/", async (req, res) => {
  try {
    let allUsers = await users.find();
    res.json(allUsers);
  } catch (e) {
    res.json({ msg: e });
  }
});
router.post("/register", async (req, res) => {

    let user = req.body
    register(user,"Default",res,req)
   
  });
  router.post("/login", async (req, res) => {
    let user = req.body
    let login = await users.findOne({
      email:user.email}).exec()

    try {
      if (bcrypt.compareSync(user.password,login.password)){
      res.json({ id:login.id,username:login.username,token:jwt.sign({
        id:login.id,
        username:login.username
      },"secret",{
        expiresIn:"1d"
      })})
      }
      else{
        res.status(401).json({ msg: "invalid password try again" });
      }
    } catch (e) {
      res.status(401).json({ msg: "invalid username try again" });
    }
  });
  router.post("/Social_Login", async (req, res) => {
    let user = req.body
if (!await users.findOne({
  email:user.email}))
  {
register(user,"Google",res,req)
return 
} 

  let login = await users.findOne({
    email:user.email}).exec()
    res.json({ id:login.id,username:login.username,token:jwt.sign({
      id:login.id,
      username:login.username
    },"secret",{
      expiresIn:"1d"
    })})
})
module.exports = router;