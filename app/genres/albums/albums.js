angular.module('genres.albums', [
  'genres.albums.create',
  'genres.albums.edit',
  'albumFavorites.models.genres',
  'albumFavorites.models.albums'
])
  .config(function($stateProvider){
    $stateProvider
      .state('albumFavorites.genres.albums',{
        url:'genres/:genre',
        views: {
          'albums@': {
              templateUrl: 'app/genres/albums/albums.tmpl.html',
              controller: 'AlbumsListCtrl as albumsListCtrl'
          }
        }
      })
    ;
  })
  .controller('AlbumsListCtrl', function ($stateParams, AlbumsModel) {
    var albumsListCtrl = this;
    albumsListCtrl.currentGenreName = $stateParams.genre;
    albumsListCtrl.albums = AlbumsModel.getAlbums();
  })
;