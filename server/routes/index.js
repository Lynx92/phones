const express = require('express');
const router  = express.Router();
const DDBB = require("../public/phones.json")

/* GET home page */

router.get("/phones", (req, res) => {
  res.json(DDBB)
})

module.exports = router;
