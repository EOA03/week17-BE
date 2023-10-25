const {MongoClient} = require("mongodb")

const dataMiddleware = async (req, res, next)=>{
  const mongoClient = await new MongoClient('mongodb://testing_brightweak:5e497d7af6d2696d2f05ddb4829e5de2b2c7111c@z29.h.filess.io:27017/testing_brightweak').connect()
  db = mongoClient.db('testing_brightweak')
  
  req.db = db
  
  next()
}

module.exports = dataMiddleware