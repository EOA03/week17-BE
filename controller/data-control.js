const bcrypt = require('bcrypt')

const allUsers = async (req, res)=>{
    try{
      const users = await req.db.collection("users").find().toArray()
      
      res.status(200).json({
        message: "Successfully get all users data",
        data: users
      })
    } catch(error){
      res.status(500).json({error: error.message})
    }
}
  
const register = async (req, res)=>{
    const {username, password, role} = req.body
    
    try{
      const user = await req.db.collection("users").findOne({username})
      
      if(user){
        throw new Error("Username already exists")
      } 
      
      const hashedPassword = await bcrypt.hash(password, 10)
      
      const newUser = await req.db.collection("users").insertOne({username, password: hashedPassword, role})
      res.status(200).json({
        message: "User successfully registered",
        data: newUser
      })
    } catch(error){
      res.status(400).json({error: error.message})
    }
}

module.exports = {
    allUsers,
    register
}