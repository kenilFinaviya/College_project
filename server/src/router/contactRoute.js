const express = require('express')
const router = express.Router();
const { help } = require("../controller/contactController");

router.post("/admin/help", help);

module.exports = router