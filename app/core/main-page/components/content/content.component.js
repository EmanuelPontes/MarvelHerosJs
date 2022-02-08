'use strict'

function ContentController($scope, $mdDialog, heroesService) {

    $scope.heroName = ""
    $scope.event = null;
    $scope.heroSelectedId = 0;
    this.$onInit = function () {
        heroesService.getByName("a").then(function (response) {

            var results = response.data.data.results;
            $scope.heros = results.map(function (result) {
                return {
                    id: result.id,
                    imgUrl: result.thumbnail ? result.thumbnail.path + "." + result.thumbnail.extension : '',
                    name: result.name,
                    description: result.description,
                }
            });
            return $scope.heros.map(function (hero) { return hero.name });
        })
    }


    $scope.onKeyUp = function () {
        heroesService.getByName($scope.heroName).then(function (response) {

            var results = response.data.data.results;
            $scope.heros = results.map(function (result) {
                return {
                    id: result.id,
                    imgUrl: result.thumbnail ? result.thumbnail.path + "." + result.thumbnail.extension : '',
                    name: result.name,
                    description: result.description,
                }
            });

        })
    }

    $scope.onDetail = function (event, id) {
        heroesService.getById(id).then(function (response) {
            var heroInfo = response.data.data.results
            $scope.details(event, heroInfo.map(function (result) {
                return {
                    id: result.id,
                    imgUrl: result.thumbnail ? result.thumbnail.path + "." + result.thumbnail.extension : '',
                    name: result.name,
                    description: result.description,
                    comics: result.comics
                }
            }));
        })
    }

    $scope.details = function (ev, heroInfo) {
        $mdDialog.show({
            parent: angular.element(document.body),
            targetEvent: ev,
            templateUrl: 'core/main-page/modal/detailsHero.template.html',
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application to prevent interaction outside of dialog

            locals: {
                heroInfo: heroInfo[0]
            },

            clickOutsideToClose: true,
            fullscreen: false, // Only for -xs, -sm breakpoints.
            controller: DialogController,
        }).then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    };

    function DialogController($scope, $mdDialog, heroInfo) {
        $scope.closeDialog = function () {
            // Easily hides most recent dialog shown...
            // no specific instance reference is needed.
            $mdDialog.hide();
        };

        $scope.heroInfo = heroInfo;
    }




}

angular.module('mainPage').component('mainContent', {
    templateUrl: 'core/main-page/components/content/content.template.html',
    controller: ['$scope', '$mdDialog', 'heroesService', ContentController],
});