const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dataMiddleware = require("./middleware/db");
const authRoute = require('./routes/data-route')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(dataMiddleware)

app.get("/", (req, res)=>{
    res.send("Test")
})
app.use("/auth", authRoute)

app.listen(3000, ()=>{
    console.log("Server running in port 3000");
})