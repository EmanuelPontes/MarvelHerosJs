'use strict'

function ContentController($scope, heroesService) {

    $scope.heroName = ""

    this.$onInit = function() {
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
    }
    

    $scope.onKeyUp = function() {
        heroesService.getByName($scope.heroName).then(function (response) {

            var results = response.data.data.results;
            $scope.heros =  results.map(function (result) {
                    return {
                        id: result.id,
                        imgUrl: result.thumbnail ? result.thumbnail.path + "." + result.thumbnail.extension : '',
                        name: result.name,
                        description: result.description,
                    }
                });
           
        })
    }
    



}

angular.module('mainPage').component('mainContent', {
    templateUrl: 'core/main-page/content/content.template.html',
    controller: ['$scope', 'heroesService', ContentController],
});