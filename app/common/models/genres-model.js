angular.module('albumFavorites.models.genres', [

])
  .service('GenresModel', function($http, $q){
    var model = this,
      URLS = {
        FETCH: 'data/genres.json'
      },
      genres;

    function extract(result) {
      return result.data;
    }

    function cacheGenres(result) {
      genres = extract(result);
      return genres;
    }

    model.getGenres = function(){
      return (genres) ? $q.when(genres) : $http.get(URLS.FETCH).then(cacheGenres);
    };

    model.getGenreByName = function() {
      var deferred = $q.defer();

      function findGenre() {
        return _.find(genres, function(g){
          return g.name == genreName;
        })
      }

      if(genres){
        deferred.resolve(findGenre());
      } else {
        model.getGenres()
          .then(function(result){
            deferred.resolve(findGenre());
          })
      }
      return deferred.promise;
    };
});