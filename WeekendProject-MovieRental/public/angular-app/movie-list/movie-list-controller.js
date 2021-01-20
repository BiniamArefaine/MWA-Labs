angular.module("movieRental").controller("MoviesController", MoviesController);

function MoviesController(MovieDataFactory){
    var vm = this;
    vm.title = "MEAN Movies App";

    MovieDataFactory.getAllMovies()
        .then(function(response){
            vm.movies = response;
        });
}