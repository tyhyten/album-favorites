angular.module('albumFavorites.models.genres', [

])
  .service('GenresModel', function($http){
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
      return $http.get(URLS.FETCH).then(cacheGenres);
    }
});