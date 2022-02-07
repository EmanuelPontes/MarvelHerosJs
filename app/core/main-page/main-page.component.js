'use strict'

function MainPageController($scope, $element, $attrs) {
    $scope.headerData = {
        logo: "",
        title: "Header Teste"
    };
}

angular.module('mainPage').component(
    'mainPage', {
        templateUrl: 'core/main-page/main-page.template.html',
        controller: ['$scope','$element','$attrs',MainPageController],
    }
)