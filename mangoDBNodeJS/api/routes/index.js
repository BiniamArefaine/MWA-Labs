var express = require("express");
var router = express.Router();
var gamecontrollers =require("../controllers/games-controllers");

router.route("/api/games").get(gamecontrollers.getCertainGames);
module.exports=router;