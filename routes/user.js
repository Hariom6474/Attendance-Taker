const express = require("express");
const controller = require("../controller/main");
const router = express.Router();

router.post("/add-attendance", controller.postAddIndex);
router.get("/get-attendance", controller.getIndex);

module.exports = router;
