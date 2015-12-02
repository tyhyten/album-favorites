angular.module('genres', [
  'albumFavorites.models.genres'
])
  .config(function($stateProvider){
    $stateProvider
      .state('albumFavorites.genres',{
        url: '/',
        views: {
          'genres@': {
            controller: 'GenresListCtrl as genresListCtrl',
            templateUrl: 'app/genres/genres.tmpl.html'
          },
          'albums@' : {
            controller: 'AlbumsListCtrl as albumsListCtrl',
            templateUrl: 'app/genres/albums/albums.tmpl.html'
          }
        }
      });
  })

  .controller('GenresListCtrl', function GenresListCtrl(GenresModel){
    var genresListCtrl = this;
    genresListCtrl.genres = GenresModel.getGenres();
  });
