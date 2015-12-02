angular.module('albumFavorites.models.albums', [

])

  .service('AlbumsModel', function($http){
    var model = this,
      URLS = {
        FETCH: 'data/albums.json'
      },
      albums;

    function extract(result) {
      return result.data;
    }

    function cacheAlbums(result) {
      albums = extract(result);
      return albums
    }

    model.getAlbums = function(){
      return $http.get(URLS.FETCH).then(cacheAlbums);
    }
  });