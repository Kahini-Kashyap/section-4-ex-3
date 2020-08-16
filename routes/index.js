var express = require("express");
var router = express.Router();

router.get("/hello/:name", function (req, res, next) {
  res.send("hello, " + req.params.name + "!");
});

router.get("/hello", function (req, res, next) {
  res.send("hello, world");
});

module.exports = router;
