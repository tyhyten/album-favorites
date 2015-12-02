angular.module('AlbumFavorites', [
    'ui.router',
    'genres',
    'genres.albums'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('albumFavorites', {
                url: '',
                abstract: true
            })
        ;

        $urlRouterProvider.otherwise('/');
    })
    .controller('MasterCtrl', function ($scope, $state) {
        $scope.currentGenre = null;
        $scope.isEditing = false;
        $scope.isCreating = false;
        $scope.editedAlbum = null;

        function isCurrentGenre(genre) {
            return $scope.currentGenre !== null && genre.name === $scope.currentGenre.name;
        }

        function setCurrentGenre(genre) {
            $scope.currentGenre = genre;
            //$state.go('albumFavorites.genres.albums', {genre:genre.name});

            cancelCreating();
            cancelEditing();
        }

        $scope.isCurrentGenre = isCurrentGenre;
        $scope.setCurrentGenre = setCurrentGenre;


        function clearGenre() {
            $scope.currentGenre = null;
        }

        function setEditedAlbum(album) {
            $scope.editedAlbum = angular.copy(album);
        }

        $scope.clearGenre = clearGenre;
        $scope.setEditedAlbum = setEditedAlbum;

        function resetCreateForm() {
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

  })
;