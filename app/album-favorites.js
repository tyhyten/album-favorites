angular.module('AlbumFavorites', [
    'ui.router',
    'genres',
    'genres.albums'
])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('albumFavorites', {
                url: '',
                abstract: true
            })
        ;

        $urlRouterProvider.otherwise('/');
    })
    .controller('AlbumCtrl', function ($scope) {
        $scope.genres = [
            {"id": 0, "name": "Rock"},
            {"id": 1, "name": "Hip-Hop"},
            {"id": 2, "name": "Folk"}
        ];

        $scope.albums = [
            {"id": 0, "artist": "Sharon Van Etten", "albumName": "I Don't Want to Let You Down", "year":"2015", "name": "Rock"},
            {"id": 1, "artist": "Nathaniel Rateliff", "albumName": "Nathaniel Rateliff", "year": "2015", "name": "Rock"},
            {"id": 2, "artist": "Gregory Alan Isakov", "albumName": "The Weatherman", "year": "2014", "name": "Folk"},
            {"id": 3, "artist": "Kendrick Lamar", "albumName": "PeanutButterfly", "year": "2015", "name": "Hip-Hop"},
            {"id": 4, "artist": "Meatloaf", "albumName": "Meatloaf", "year": "2015", "name": "Rock"},
            {"id": 5, "artist": "Shaq", "albumName": "Magic", "year": "2015", "name": "Hip-Hop"},
            {"id": 6, "artist": "Slayer", "albumName": "Spaghetti", "year": "2015", "name": "Rock"},
            {"id": 6, "artist": "Spoon", "albumName": "Meatloaf", "year": "2015", "name": "Rock"}
        ];
        $scope.currentGenre = null;
        $scope.isEditing = false;
        $scope.isCreating = false;
        $scope.editedAlbum = null;


        function isCurrentGenre(genre) {
            return $scope.currentGenre !== null && genre.name === $scope.currentGenre.name;
        }

        function setCurrentGenre(genre) {
            $scope.currentGenre = genre;

            cancelCreating;
            cancelEditing;
        }

        function clearGenre() {
            $scope.currentGenre = null;
        }

        function setEditedAlbum(album) {
            $scope.editedAlbum = angular.copy(album);
        }

        $scope.isCurrentGenre = isCurrentGenre;
        $scope.setCurrentGenre = setCurrentGenre;
        $scope.clearGenre = clearGenre;
        $scope.setEditedAlbum = setEditedAlbum;

        function resetCreateForm() {
            console.log('hello world');
            $scope.newAlbum = {
                albumName: '',
                artist: '',
                year: '',
                name: ''
            }
        }

      //CRUD

        function createAlbum(album) {
            album.id = $scope.albums.length;
            $scope.albums.push(album);

            resetCreateForm();
        }

        function updateAlbum(album) {
            var index = _.findIndex($scope.albums, function(alb) {
                return alb.id == album.id
            });
            $scope.albums[index] = album;

            $scope.editedAlbum = null;
            $scope.isEditing = false;
            console.log($scope.albums[index]);
        }

        function deleteAlbum(album) {
            _.remove($scope.albums, function(alb){
                return alb.id == album.id;
            });
        }

        $scope.deleteAlbum = deleteAlbum;
        $scope.createAlbum = createAlbum;
        $scope.updateAlbum = updateAlbum;

      //states

        function shouldShowCreating() {
            return $scope.isCreating && !$scope.isEditing;
        }

        function startCreating() {
            $scope.isCreating = true;
            $scope.isEditing = false;

            resetCreateForm();
        }

        function cancelCreating() {
            $scope.isCreating = false;
        }

        $scope.shouldShowCreating = shouldShowCreating;
        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;


        function shouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating;
        }

        function startEditing() {
            $scope.isEditing = true;
            $scope.isCreating = false;
        }

        function cancelEditing() {
            $scope.isEditing = false;
        }

        $scope.shouldShowEditing = shouldShowEditing;
        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;

  });