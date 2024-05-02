const { timestamp, noParams } = require("../controllers/timestamp");
const express = require("express");

const router = express.Router();

router.route("/").get(noParams);
router.route("/:date").get(timestamp);

module.exports = router;
