const express = require('express')
const router = express.Router();
const { checkout } = require("../controller/paymentControllr");

router.post("/checkout", checkout);

module.exports = router