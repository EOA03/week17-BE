const {Router} = require("express")
const {allUsers, register} = require("../controller/data-control")

const authRoute = Router()

authRoute.get("/", allUsers)
authRoute.post("/register", register)

module.exports = authRoute