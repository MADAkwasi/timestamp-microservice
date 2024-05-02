const { whoAmI } = require("../controllers/timestamp");
const express = require("express");

const router = express.Router();

router.route("/").get(whoAmI);

module.exports = router;
