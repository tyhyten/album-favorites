angular.module('AlbumFavorites', [

])
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
            {"id": 3, "artist": "Kendrick Lamar", "albumName": "To Pimp a Butterfly", "year": "2015", "name": "Hip-Hop"},
            {"id": 4, "artist": "Nickleback", "albumName": "Meatloaf", "year": "2015", "name": "Rock"},
            {"id": 5, "artist": "Shaq", "albumName": "Magic", "year": "2015", "name": "Hip-Hop"},
            {"id": 6, "artist": "Slayer", "albumName": "Spaghetti", "year": "2015", "name": "Rock"},
            {"id": 6, "artist": "Spoon", "albumName": "Meatloaf", "year": "2015", "name": "Rock"}
        ];

        $scope.currentGenre = null;

        function isCurrentGenre(genre) {
            return $scope.currentGenre !== null && genre.name === $scope.currentGenre.name;
        }

        function setCurrentGenre(genre) {
            $scope.currentGenre = genre;
        }

        $scope.isCurrentGenre = isCurrentGenre;
        $scope.setCurrentGenre = setCurrentGenre;

  });