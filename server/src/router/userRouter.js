const express = require("express")
const router = express.Router()
const { userLogin, userRegister,userdelete, getAlluser } = require("../controller/userController")

router.post("/userLogin", userLogin)
router.post("/userRegister", userRegister)
router.get("/userdelete/:id", userdelete)
router.get("/getAlluser", getAlluser)

module.exports = router

