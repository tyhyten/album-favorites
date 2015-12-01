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
              controller: 'AlbumsCtrl'
          }
        }
      })
    ;
  })
  .controller('AlbumsCtrl', function($scope,$stateParams ){
    $scope.currentGenreName = $stateParams.genre;
  })
;