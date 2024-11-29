const express = require("express")
const router = express.Router();

const { OrderData ,getOrder,smsSender} = require("../controller/OrderController")

router.post("/admin/order", OrderData)
router.get("/admin/getOrder", getOrder)
router.post("/smsSender", smsSender)

module.exports = router;