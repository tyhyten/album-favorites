angular.module('albumFavorites.models.genres', [

])
  .service('GenresModel', function(){
    var model = this,
      genres = [
        {"id": 0, "name": "Rock"},
        {"id": 1, "name": "Hip-Hop"},
        {"id": 2, "name": "Folk"}
      ];
    model.getGenres = function(){
      return genres;
    }
});