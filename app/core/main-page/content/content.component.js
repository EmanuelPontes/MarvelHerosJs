'use strict'

function ContentController($scope, heroesService) {

    heroesService.getByName("a").then(function (response) {

        var results = response.data.data.results;
        $scope.heros =  results.map(function (result) {
                return {
                    id: result.id,
                    imgUrl: result.thumbnail ? result.thumbnail.path + "." + result.thumbnail.extension : '',
                    name: result.name,
                    description: result.description,
                }
            });
        return $scope.heros.map(function(hero) { return hero.name});
    })
    $scope.getCharacters = function(val) {
        return heroesService.getByName(val ? val : "a").then(function (response) {

            var results = response.data.data.results;
            $scope.heros =  results.map(function (result) {
                    return {
                        id: result.id,
                        imgUrl: result.thumbnail ? result.thumbnail.path + "." + result.thumbnail.extension : '',
                        name: result.name,
                        description: result.description,
                    }
                });
            return $scope.heros.map(function(hero) { return hero.name});
        })
    }
    



}

angular.module('mainPage').component('mainContent', {
    templateUrl: 'core/main-page/content/content.template.html',
    controller: ['$scope', 'heroesService', ContentController],
});