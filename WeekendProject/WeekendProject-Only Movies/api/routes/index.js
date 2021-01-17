var express = require("express");
var router = express.Router();
var movieController =  require("../controllers/movie-controller");

router.route("/api/movies")
   .get(movieController.getAllMovies)
   .post(movieController.addOneMovie);

router.route("/api/movies/:movieId")
   .get(movieController.getOneMovie)
   .put(movieController.updateOneMovie)
   .delete(movieController.deleteOneMovie);


module.exports = router;