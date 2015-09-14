angular.module('genres', [
  'albumFavorites.models.genres'
])
  .config(function($stateProvider){
    $stateProvider
      .state('albumFavorites.genres',{
        url: '/',
        views: {
          'genres@': {
            controller: 'GenresCtrl',
            templateUrl: 'app/genres/genres.tmpl.html'
          },
          'albums@' : {
            controller: 'AlbumsCtrl',
            templateUrl: 'app/genres/albums/albums.tmpl.html'
          }
        }
      })
  })

  .controller('GenresCtrl', function GenresCtrl($scope){

  })

  .controller('AlbumsCtrl', function AlbumsCtrl($scope){


  });
