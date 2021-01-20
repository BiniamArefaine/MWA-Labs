angular.module("movieRental").factory("MovieDataFactory", MovieDataFactory);

function MovieDataFactory($http){
    return{
        getAllMovies: getAllMovies,
        getOneMovie: getOneMovie
    };

    function getAllMovies(){
        return $http.get("/api/movies").then(complete).catch(failed);
    }

    function getOneMovie(id){
        return $http.get("/api/movies/"+id).then(complete).catch(failed);
    }

    function complete(response){
        console.log(response.data);
        return response.data;
    }

    function failed(error){
        return error.status.statusText;
    }
}