angular.module('albumFavorites.models.albums', [

])

  .service('AlbumsModel', function(){
    var model = this,
      albums = [
        {"id": 0, "artist": "Sharon Van Etten", "albumName": "I Don't Want to Let You Down", "year":"2015", "genre": "Rock"},
        {"id": 1, "artist": "Nathaniel Rateliff", "albumName": "Nathaniel Rateliff", "year": "2015", "genre": "Rock"},
        {"id": 2, "artist": "Gregory Alan Isakov", "albumName": "The Weatherman", "year": "2014", "genre": "Folk"},
        {"id": 3, "artist": "Kendrick Lamar", "albumName": "PeanutButterfly", "year": "2015", "genre": "Hip-Hop"},
        {"id": 4, "artist": "Meatloaf", "albumName": "Meatloaf", "year": "2015", "genre": "Rock"},
        {"id": 5, "artist": "Shaq", "albumName": "Magic", "year": "2015", "genre": "Hip-Hop"},
        {"id": 6, "artist": "Slayer", "albumName": "Spaghetti", "year": "2015", "genre": "Rock"},
        {"id": 6, "artist": "Spoon", "albumName": "Meatloaf", "year": "2015", "genre": "Rock"}
      ];
    model.getAlbums = function(){
      return albums;
    }
  });