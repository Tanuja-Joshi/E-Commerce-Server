const express = require('express')
const path = require('path')
const router = express.Router()
const UserModel = require('../models/UserSchema.js')
const app = express()

app.use(express.json())

router.post('/register', async (req, res) => {
  console.log('Received registration request');
  try {
    const user = await UserModel.create(req.body);
    console.log('User created:', user);
    res.json(user);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login',async(req,res)=>{
   const {email,password}= req.body
 const result = await UserModel.findOne({email})
    if(result){
      if(result.password===password){
        res.json("success")
      }
      else{
        res.json("password is incorrect")
      }
    }
    else{
      res.json("No user exists!!! please sign up")
    }
})

module.exports = router